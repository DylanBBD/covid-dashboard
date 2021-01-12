import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountryData } from '../api/covid';
import { DashboardService } from '../dashboard/dashboard.service';
import { CountrySearchService } from './country-search.service';

const STORAGE_KEY = 'countrySearchList';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent implements OnInit {

  searchString = '';
  countryDataList: CountryData[] = [];
  totalCases: number;

  @ViewChild('input') searchInput: ElementRef;

  constructor(private countrySearchService: CountrySearchService, private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.totalCases.subscribe(value => {
      this.totalCases = value;
    });

    this.loadList();
  }

  ngAfterViewInit() {
    this.searchInput.nativeElement.focus();
  }

  search() {
    if (this.countryDataList.some(country => country.country.toLowerCase() === this.searchString.toLowerCase())) {
      return;
    }

    this.countrySearchService.getCountryDetails(this.searchString).then(res => {
      if (res != null) {
        this.searchString = '';
        this.countryDataList.push(res);
        this.saveList();
      }
    }).catch(err => {
      console.error(err);
    });
  }

  deleteCard(cardIndex: number) {
    this.countryDataList = this.countryDataList.filter((cd, index) => index !== cardIndex);
    this.saveList();
  }

  saveList() {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.countryDataList));
  }

  loadList() {
    const storedList = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    if (storedList != null) {
      this.countryDataList = storedList;
    }
  }

}
