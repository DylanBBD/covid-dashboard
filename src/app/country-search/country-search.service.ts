import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryData } from '../api/covid';
import { API_ROUTES } from 'src/assets/config';

@Injectable({
  providedIn: 'root'
})
export class CountrySearchService {

  constructor(private http: HttpClient) { }

  getCountryDetails(searchString: string): Promise<CountryData> {
    const params = {name: searchString};

    return this.http.get<CountryData[]>(API_ROUTES.search, {params: params}).toPromise().then(res => {
      return res[0];
    }).catch(err => {
      return Promise.reject(err);
    });
  }
}
