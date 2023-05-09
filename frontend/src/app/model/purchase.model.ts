import {Customer} from "./customer.model";
import {Address} from "./address.model";
import {Order} from "./order.model";
import {OrderItem} from "./order-item.model";

export class Purchase {
  customer: Customer;
  shippingAddress: Address;
  order: Order;
  orderItems: OrderItem[];
}
