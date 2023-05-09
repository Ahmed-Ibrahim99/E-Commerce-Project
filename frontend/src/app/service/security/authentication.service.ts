import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,
              private cookie: CookieService) {
  }

  signIn(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:8080/sign-in', {email, password}).pipe(
      map(
        (response) => {
          sessionStorage.setItem("email", response.email)
          sessionStorage.setItem("token", `Bearer ${response.token}`)
          this.cookie.set("email", response.email)
          this.cookie.set("token", response.token)
          return response;
        }
      )
    );
  }

  signUp(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:8080/sign-up', {email, password}).pipe(
      map((response) => {
        return response;
      })
    );
  }

  getEmail() {
    return sessionStorage.getItem("email");
  }

  getToken() {
    if (this.getEmail()) {
      return sessionStorage.getItem("token");
    } else {
      return null;
    }
  }

  isLogin() {
    return !(sessionStorage.getItem('email') == null &&
      sessionStorage.getItem('token') == null);
  }

  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    localStorage.removeItem('cartItems')
    this.cookie.delete('email');
    this.cookie.delete('token');
  }
}
