import { Component, OnInit } from '@angular/core';
import { vehiclesArr } from '../classes';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  cars: any[] = vehiclesArr;

  constructor() {}

  ngOnInit(): void {
    console.table(this.cars);
  }
}
