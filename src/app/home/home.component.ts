/** @format */

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  slides = [
    {
      image: "../../assets/images/3.PNG",
    },
    {
      image: "../../assets/images/2.PNG",
    },
    {
      image: "../../assets/images/1.PNG",
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
