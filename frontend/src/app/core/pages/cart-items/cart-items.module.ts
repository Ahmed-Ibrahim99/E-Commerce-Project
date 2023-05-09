import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsComponent } from './cart-items.component';
import {CartItemsRoutingModule} from "./cart-items-routing.module";
import {AvatarModule} from "primeng/avatar";
import { EmptyCartComponent } from './empty-cart/empty-cart.component';

@NgModule({
  declarations: [
    CartItemsComponent,
    EmptyCartComponent
  ],
    imports: [
        CommonModule,
        CartItemsRoutingModule,
        AvatarModule
    ]
})
export class CartItemsModule { }
