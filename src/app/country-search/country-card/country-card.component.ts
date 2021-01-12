import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountryData } from 'src/app/api/covid';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

  @Input() totalCases: number;
  @Input() data: CountryData;
  @Output() deleteCard = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteCard() {
    this.deleteCard.emit();
  }

}
