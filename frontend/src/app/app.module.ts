import {NgModule} from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/components/common/header/header.component';
import {FooterComponent} from './core/components/common/footer/footer.component';
import {CartStatusComponent} from './core/components/cart-status/cart-status.component';
import {MenubarModule} from "primeng/menubar";
import {FormsModule} from "@angular/forms";
import {ProductsModule} from "./core/pages/products/products.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./service/security/http-interceptor.service";
import {InputTextModule} from "primeng/inputtext";
import {BadgeModule} from "primeng/badge";
import {AvatarModule} from "primeng/avatar";
import {CookieService} from "ngx-cookie-service";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartStatusComponent
  ],
    imports: [
        NgbModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MenubarModule,
        FormsModule,
        ProductsModule,
        InputTextModule,
        BadgeModule,
        AvatarModule,
        ToastModule
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
  }, CookieService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
