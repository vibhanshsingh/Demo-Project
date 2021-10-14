import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})

export class AllProductComponent implements OnInit {

  public productList : any;
  i:number=0;
  constructor(private api:ApiService, private cartService: CartService) { }

  ngOnInit(): void {

    this.api.getProduct().subscribe(res=>{
      
      this.productList = res;
      this.productList.forEach((a:any)=> {
      Object.assign(a, {quantity:1, total:a.productPrice});
      });

    })

  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

}
