import {Injectable} from '@angular/core';
import {CartItem} from "../model/cart-item.model";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  //BehaviorSubject is a subclass of observable
  //Has a buffer of all last events
  //once subscribed, subscriber receives the latest events sent prior to subscribing
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  storage: Storage = localStorage;

  constructor() {
    //read data from storage
    let data = JSON.parse(this.storage.getItem('cartItems')!);

    if (data != null) {
      this.cartItems = data;
      //compute totals based on the data from storage
      this.computeCartTotals();
    }
  }

  addToCart(cartItem: CartItem) {

    //check if we already have the item in our cart
    let existsInCart: boolean = false;
    let existingCartItem: CartItem = undefined!;

    if (this.cartItems.length > 0) {
      //find the item in the cart based on item id
      // @ts-ignore
      existingCartItem = this.cartItems.find(CartItem => CartItem.id === cartItem.id);

      //check if we found it
      existsInCart = (existingCartItem != undefined);
    }
    if (existsInCart) {
      //increment the quantity
      existingCartItem.quantity++;
    } else {
      //just add the item to cartItem array
      this.cartItems.push(cartItem);
    }
    //compute cart total price and total quantity
    this.computeCartTotals();
  }

  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
    }
    // publish the new values ... all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    //persist cart data
    this.persistCartItems();
  }

  persistCartItems() {
    this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  decrementQuantity(cartItem: CartItem) {
    cartItem.quantity--;
    if (cartItem.quantity === 0) {
      this.remove(cartItem);
    } else {
      this.computeCartTotals();
    }
  }

  remove(cartItem: CartItem) {
    //get index of item in the array
    const itemIndex = this.cartItems.findIndex(cartItem => cartItem.id === cartItem.id);

    //if found remove the item from array
    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }
  }
}
