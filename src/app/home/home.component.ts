import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides = [
    {
      image: '../../assets/images/car-rental4.jpg',
    },
    {
      image: '../../assets/images/car-rental3.jpg',
    },
    {
      image: '../../assets/images/car-rental1.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
