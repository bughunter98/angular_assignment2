import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:"",redirectTo:'product-list',pathMatch:'full'},
  {path:'product-list',component: ProductListComponent},
  {path:'product-description',component:ProductDescriptionComponent},
  {path:"cart-page",component:CartComponent},
  {path:"checkout",component:CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutes =[
  AppComponent,
  ProductListComponent,
  ProductDescriptionComponent,
  CartComponent,
  CheckoutComponent
]

