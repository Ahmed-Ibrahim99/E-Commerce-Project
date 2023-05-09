import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "../model/country.model";
import {map, Observable} from "rxjs";
import {State} from "../model/state.model";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) {
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<GetResponseCountries>('api/countries').pipe(
      map((response) => response._embedded.countries));
  }

  getStates(countryCode: string): Observable<State[]> {
    return this.http.get<GetResponseStates>(`api/states/search/findByCountryCodeIgnoreCase?code=${countryCode}`).pipe(
      map((response) => response._embedded.states)
    );
  }
}

interface GetResponseCountries {
  _embedded: {
    countries: Country[];
  }
}

interface GetResponseStates {
  _embedded: {
    states: State[];
  }
}
