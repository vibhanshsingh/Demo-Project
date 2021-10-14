import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal : number = 0;
  public quantity : number = 1;

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=> {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      
    })
  }

  removeItem(item : any) {
    this.cartService.removeCartItem(item);
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }

  inc(){
    this.quantity++;
  }

}
