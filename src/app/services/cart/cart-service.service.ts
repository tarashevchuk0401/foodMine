import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Cart } from '../food/Cart';
import { CartItem } from '../food/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cart: Cart = new Cart();

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId:number){
    this.cart.items =this.cart.items.filter(item => item.food.id != foodId)
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
 