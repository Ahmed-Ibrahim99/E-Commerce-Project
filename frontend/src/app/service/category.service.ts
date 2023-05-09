import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Category} from "../model/category.model";

interface GetResponse {
  _embedded: {
    productCategory: Category[];
  }
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<GetResponse>("api/product-category").pipe(
      map(response => response._embedded.productCategory)
    );
  }

}
