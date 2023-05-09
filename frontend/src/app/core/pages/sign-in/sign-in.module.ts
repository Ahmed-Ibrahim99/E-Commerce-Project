import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './sign-in.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SignInRoutingModule} from "./sign-in-routing.module";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    SignInComponent
  ],
    imports: [
        CommonModule,
        SignInRoutingModule,
        ReactiveFormsModule,
        CheckboxModule,
        InputTextModule,
        ButtonModule,
        RippleModule
    ],providers: [MessageService]
})
export class SignInModule {
}
