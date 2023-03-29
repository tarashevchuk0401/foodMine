import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart/cart-service.service';
import { Cart } from '../services/food/Cart';
import { CartItem } from '../services/food/cartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:Cart;
  constructor(private cartService: CartServiceService , private foodService: FoodService) { 
    let foods = foodService.getAll();
    cartService.addToCart(foods[1]);
    cartService.addToCart(foods[2]);
    cartService.addToCart(foods[3]);
    this.setCart()
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }


}
