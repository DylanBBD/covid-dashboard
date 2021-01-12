import { Component, OnInit } from '@angular/core';
import { TotalData } from '../api/covid';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalData: TotalData;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getTotals().then(res => {
      this.totalData = res;
    }).catch(e => {
      console.error(e);
    });
  }

}
