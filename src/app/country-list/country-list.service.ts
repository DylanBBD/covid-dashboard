import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryData } from '../api/covid';
import { API_ROUTES } from 'src/assets/config';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {

  constructor(private http: HttpClient) { }

  getCountryList(): Promise<CountryData[]> {
    return this.http.get<CountryData[]>(API_ROUTES.list).toPromise();
  }
  
}


