import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private cookie: CookieService) {
  }

  ngOnInit() {
    if (this.isCookie()) {
      sessionStorage.setItem('email', this.cookie.get('email'))
      sessionStorage.setItem('token', this.cookie.get('token'))
    }
  }

  isCookie() {
    if (this.cookie.get('email') === '' && this.cookie.get('token') === '') {
      return false;
    } else {
      return true;
    }
  }
}
