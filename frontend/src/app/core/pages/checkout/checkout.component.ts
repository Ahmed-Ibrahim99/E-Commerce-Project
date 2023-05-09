import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../../../service/form.service";
import {Country} from "../../../model/country.model";
import {State} from "../../../model/state.model";
import {CustomValidators} from "../../../service/validators/custom-validators";
import {CartService} from "../../../service/cart.service";
import {CheckoutService} from "../../../service/checkout.service";
import {Router} from "@angular/router";
import {Order} from "../../../model/order.model";
import {OrderItem} from "../../../model/order-item.model";
import {Purchase} from "../../../model/purchase.model";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  totalPrice: number = 0;
  totalQuantity: number = 0;
  checkoutFormGroup: FormGroup;
  countries: Country[] = [];
  states: State[] = [];

  constructor(private formBuilder: FormBuilder,
              private formService: FormService,
              private cartService: CartService,
              private checkoutService: CheckoutService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      contact: this.formBuilder.group({
        phoneNo: new FormControl('', [Validators.required]),
        email: new FormControl('',
          [Validators.required,
            CustomValidators.whiteSpace,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
      }),
      shippingInfo: this.formBuilder.group({
        name: new FormControl('',
          [Validators.required, Validators.minLength(2),
            CustomValidators.whiteSpace]),
        address: new FormControl('', [Validators.required,
          Validators.minLength(2),
          CustomValidators.whiteSpace]),
        apartment: new FormControl('', [Validators.required,
          Validators.minLength(2),
          CustomValidators.whiteSpace]),
        country: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required])
      })
    });

    //populate countries
    this.getCountries();

    //populate cart details
    this.cartDetails();
  }

  onSubmit() {
    if (this.checkoutFormGroup.invalid) {
      this.checkoutFormGroup.markAllAsTouched();
      return;
    }
    //setup order
    let order = new Order();
    order.totalPrice = this.totalPrice;
    order.totalQuantity = this.totalQuantity;

    //get cart items
    const cartItems = this.cartService.cartItems;

    //create orderItems from cartItems
    let orderItems: OrderItem[] = cartItems.map((cartItem) => new OrderItem(cartItem));

    //set up purchase
    let purchase = new Purchase();

    //populate purchase - customer
    purchase.customer = this.checkoutFormGroup.controls['contact'].value;

    //populate purchase - shipping address
    purchase.shippingAddress = this.checkoutFormGroup.controls['shippingInfo'].value;
    const state: State = JSON.parse(JSON.stringify(purchase.shippingAddress.state));
    const country: Country = JSON.parse(JSON.stringify(purchase.shippingAddress.country));
    purchase.shippingAddress.state = state.name;
    purchase.shippingAddress.country = country.name;

    //populate purchase - order and orderItems
    purchase.order = order;
    purchase.orderItems = orderItems;

    //call api via checkoutService
    this.checkoutService.placeOrder(purchase).subscribe(
      (response) => {
        alert(`Your Order has been received.\nOrder tracking number: ${response.orderTrackingNumber}`)
        //reset cart
        this.resetCart();
      }
    );
  }

  getCountries() {
    this.formService.getCountries().subscribe(
      (data) => {
        this.countries = data;
      });
  }

  getStates() {
    const countryCode = this.checkoutFormGroup.get('shippingInfo.country')?.value;

    this.formService.getStates(countryCode).subscribe(
      (data) => {
        this.states = data;
      });
  }

  cartDetails() {
    //subscribe to total price
    this.cartService.totalPrice.subscribe(
      (data) => {
        this.totalPrice = data;
      }
    );
    //subscribe to total quantity
    this.cartService.totalPrice.subscribe(
      (data) => {
        this.totalQuantity = data;
      }
    );
  }

  resetCart() {
    //reset cart data
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuantity.next(0);

    //reset the form
    this.checkoutFormGroup.reset();

    //navigate back to the products page
    this.router.navigateByUrl('/products');
  }

}
