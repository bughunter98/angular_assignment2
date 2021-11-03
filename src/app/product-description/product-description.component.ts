import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Services } from '../service';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  public productDescription : any; 
  constructor(private activatedRoute:ActivatedRoute,private api:Services) { }

  ngOnInit(): void  {
      this.api.getProduct()
      .subscribe(res=>{
        this.productDescription=res;  
      })
    // let productId:number = parseInt(this.activatedRoute.snapshot.params.get('id'));
    // this.productId = productId;
    // this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    //   let id = parseInt(params.get('id')) ;
    // })

    
  }
  

}
