import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import {ProductDetailRoutingModule} from "./product-detail-routing.module";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {RatingModule} from "primeng/rating";
import {AvatarModule} from "primeng/avatar";
import {TabViewModule} from "primeng/tabview";



@NgModule({
  declarations: [
    ProductDetailComponent
  ],
    imports: [
        ProductDetailRoutingModule,
        CommonModule,
        CardModule,
        ButtonModule,
        DropdownModule,
        InputNumberModule,
        CheckboxModule,
        FormsModule,
        BreadcrumbModule,
        RatingModule,
        AvatarModule,
        TabViewModule
    ]
})
export class ProductDetailModule { }
