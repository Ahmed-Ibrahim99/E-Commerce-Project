import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product.model";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../service/cart.service";
import {CartItem} from "../../../model/cart-item.model";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product();

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.productDetails();
    });
  }

  productDetails() {
    const productId: number = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(productId).subscribe(
      (data) => {
        this.product = data;
      });
  }

  addToCart() {
    const cartItem =new CartItem(this.product);
    this.cartService.addToCart(cartItem);
  }

}
