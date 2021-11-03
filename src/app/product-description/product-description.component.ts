import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { Services } from '../service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],
})
export class ProductDescriptionComponent implements OnInit {
  constructor(
    private api: Services,
    private cartService: CartService,
    private router: Router
  ) {}
  public productDescription?: ProductDescription;

  ngOnInit(): void {
    this.productDescription = history.state;
    console.log(this.productDescription);
  }

  addtoCart(productDescription: ProductDescription) {
    this.cartService.addToCart(this.productDescription);
    this.router.navigateByUrl('/cart', { state: this.productDescription });
  }
}

export interface ProductDescription {
  category: string;
  description: string;
  id: number;
  image: string;
  navigationId: number;
  price: number;
  quantity: number;
  rating: { rate: number; count: number };
  title: string;
  total: number;
}
