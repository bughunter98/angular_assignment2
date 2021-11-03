import { Component, OnInit } from '@angular/core';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public totalItem: number = 0;
  title = 'ecommerce-app';
  public User: string = 'Sai Teja';
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res) => {
      this.totalItem = res.length;
    });
  }
}
