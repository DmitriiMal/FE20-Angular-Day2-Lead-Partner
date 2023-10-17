import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { vehiclesArr } from '../classes';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  info = new FormGroup({
    mark: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    mileage: new FormControl('', Validators.required),
    seatsNumber: new FormControl('', Validators.required),
    fuelType: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    condition: new FormControl('', Validators.required),
    consumption: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    let a = this.info.value;
    vehiclesArr.push(a);
    console.table(vehiclesArr);
  }
}
