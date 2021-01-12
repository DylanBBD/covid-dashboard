import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TotalData } from '../api/covid';
import { BehaviorSubject } from 'rxjs';
import { API_ROUTES } from 'src/assets/config';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  totalCases = new BehaviorSubject<number>(undefined);

  constructor(private http: HttpClient) { }

  getTotals(): Promise<TotalData> {
    return this.http.get<TotalData[]>(API_ROUTES.totals).toPromise().then(res => {
      this.totalCases.next(res[0].confirmed);
      return res[0];
    }).catch(err => {
      return Promise.reject(err);
    });
  }

}


