import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myRoutes } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { CartComponent } from './cart/cart.component';
//import { ProductDescriptionComponent } from './product-description/product-description.component';

@NgModule({
  declarations: [
    AppComponent,
    myRoutes,
    PageNotFoundComponent,
    //CartComponent
    //ProductDescriptionComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
