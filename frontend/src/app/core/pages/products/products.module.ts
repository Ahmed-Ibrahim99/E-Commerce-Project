import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {ProductsRoutingModule} from "./products-routing.module";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {GalleriaModule} from "primeng/galleria";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    ProductsComponent
  ],
  exports: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgbPagination,
    GalleriaModule,
    DropdownModule,
    ButtonModule
  ]
})
export class ProductsModule { }
