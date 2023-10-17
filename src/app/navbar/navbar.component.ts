import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  donate: number = 10;

  countClick() {
    this.donate = this.donate + 10;
  }

  constructor() {}
  ngOnInit(): void {}
}
