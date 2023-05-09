import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product.model";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../service/cart.service";
import {CartItem} from "../../../model/cart-item.model";
import {Category} from "../../../model/category.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  _products: Product[];
  category: Category[];
  searchMode: boolean;
  pageNumber: number = 1;
  pageSize: number = 4;
  totalElements: number = 0;


  constructor(private productService: ProductService,
              private cartService: CartService,
              public _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.searchMode = this._route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProduct();
    } else {
      this.handleListProducts();
    }
  }

  handleListProducts() {
    // Check if "id" parameter is available
    const hasCategoryId = this._route.snapshot.paramMap.has('id');

    // If we have a category ID, get the products for that category
    if (hasCategoryId) {
      // Get the "id" param string and convert it to a number
      const categoryId = +this._route.snapshot.paramMap.get('id')!;
      this.productService.getProductsPaginationByCategoryId(this.pageNumber - 1, this.pageSize, categoryId).subscribe(
        (data) => {
          this._products = data._embedded.products;
          this.pageNumber = data.page.number + 1;
          this.pageSize = data.page.size;
          this.totalElements = data.page.totalElements;
        }
      );
    } else {
      // Otherwise, get all products
      this.productService.getProductListPagination(this.pageNumber - 1, this.pageSize).subscribe(
        (data) => {
          this._products = data._embedded.products;
          this.pageNumber = data.page.number + 1;
          this.pageSize = data.page.size;
          this.totalElements = data.page.totalElements;
        }
      );
    }
  }

  handleSearchProduct() {
    const keyword = this._route.snapshot.paramMap.get('keyword');

    this.productService.getProductsByName(keyword, this.pageNumber - 1, this.pageSize).subscribe(
      (data) => {
        this._products = data._embedded.products;
        this.pageNumber = data.page.number + 1;
        this.pageSize = data.page.size;
        this.totalElements = data.page.totalElements;
      });
  }

  addToCart(product: Product) {
    const cartItem = new CartItem(product);
    this.cartService.addToCart(cartItem);
  }

}
