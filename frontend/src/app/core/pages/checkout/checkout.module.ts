import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckoutComponent} from './checkout.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CheckoutRoutingModule} from "./checkout.routing.module";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    CheckoutComponent
  ],
    imports: [
        CommonModule,
        CheckoutRoutingModule,
        ReactiveFormsModule,
        InputTextModule
    ]
})
export class CheckoutModule {
}
