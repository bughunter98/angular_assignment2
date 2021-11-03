import { Injectable } from '@angular/core';
import { BehaviorSubject, empty } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}
  getProducts() {
    return this.productList.asObservable(); // gets the data present in the item which calls it
  }
  setProducts(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product); // data is passed where ever the data is subscribed
  }
  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice(): number {
    let finalTotal = 0;
    this.cartItemList.map((a: any) => {
      finalTotal += a.total;
    });
    return finalTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAll() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
