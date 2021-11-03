import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from '../service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productList : any;

  constructor(private api : Services,private cartService:CartService,private _router:Router) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        
      });
    })
  }
  addToCart(item:any){
    this.cartService.addToCart(item);

  }
  onSelect(items:any){
      this._router.navigate(['/product-list',items.id]); 
  }

  }


