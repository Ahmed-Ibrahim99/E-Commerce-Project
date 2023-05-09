import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {CategoryService} from "../../../../service/category.service";
import {Category} from "../../../../model/category.model";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../../service/security/authentication.service";
import {CartService} from "../../../../service/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  value: string;

  constructor(private categoryService: CategoryService,
              private auth: AuthenticationService,
              private cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.items = categories.map(category => {
        return {label: category.name, routerLink: `/category/${category.id}`};
      });
    });
  }

  doSearch(value: string) {
    this.router.navigateByUrl(`/search/${value}`);
  }

  isAuthenticated() {
    return this.auth.isLogin();
  }

  logOut() {
    this.cartService.cartItems = [];
    this.cartService.totalQuantity.next(0);
    this.cartService.totalPrice.next(0);
    this.auth.logOut();
    this.router.navigateByUrl("/products")
  }
}
