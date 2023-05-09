import {Product} from "./product.model";

export class CartItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  sku:string;
  quantity: number;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.imageUrl = product.imageUrl;
    this.price = product.price;
    this.sku = product.sku;
    this.quantity = 1;
  }
}
