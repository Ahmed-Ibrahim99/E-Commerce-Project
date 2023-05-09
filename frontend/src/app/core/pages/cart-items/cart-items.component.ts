import {Component, OnInit} from '@angular/core';
import {CartItem} from "../../../model/cart-item.model";
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.listShoppingCartItems();
  }

  listShoppingCartItems() {
    //get cart items
    this.cartItems = this.cartService.cartItems;

    //subscribe to total price
    this.cartService.totalPrice.subscribe(
      (data) => this.totalPrice = data
    );

    //subscribe to total quantity
    this.cartService.totalQuantity.subscribe(
      (data) => this.totalQuantity = data
    );

    //compute cart total price and quantity
    this.cartService.computeCartTotals();
  }

  incrementProductQuantity(cartItem: CartItem) {
    this.cartService.addToCart(cartItem);
  }
  decrementProductQuantity(cartItem: CartItem) {
    this.cartService.decrementQuantity(cartItem);
  }
  remove(cartItem: CartItem) {
    this.cartService.remove(cartItem);
  }

}
