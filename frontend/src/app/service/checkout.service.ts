import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Purchase} from "../model/purchase.model";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) {
  }

  placeOrder(purchase: Purchase): Observable<any> {
    return this.http.post<Purchase>(`api/checkout/purchase`, purchase);
  }
}
