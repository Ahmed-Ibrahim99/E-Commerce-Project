import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../model/product.model";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<GetResponse>("api/products").pipe(
      map((response) => response._embedded.products)
    );
  }

  getProductListPagination(pageNumber: number, pageSize: number): Observable<GetResponse> {
    return this.http.get<GetResponse>(`api/products?page=${pageNumber}&size=${pageSize}`);
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`api/products/${productId}`);
  }

  getProductsByCategoryId(categoryId: number): Observable<Product[]> {
    return this.http.get<GetResponse>(`api/products/search/findByCategory_Id?id=${categoryId}`)
      .pipe(map((response) => response._embedded.products));
  }

  getProductsPaginationByCategoryId(page: number,
                                    pageSize: number,
                                    categoryId: number): Observable<GetResponse> {
    return this.http.get<GetResponse>(
      `api/products/search/findByCategory_Id?id=${categoryId}` + `&page=${page}&size=${pageSize}`);
  }

  getProductsByName(productName: string | null, page: number, pageSize: number): Observable<GetResponse> {
    return this.http.get<GetResponse>(`api/products/search/findByNameIgnoreCaseContaining?name=${productName}&page=${page}&size=${pageSize}`);
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
