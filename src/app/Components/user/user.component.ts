import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  public url: any = "";
  public car: any = "";
  public country: any = "";
  public city: any = "";
  public pickupDate: any = "";
  public returnDate: any = "";
  public km: any = "";
  public emission: any = "";
  constructor() {}

  ngOnInit(): void {
    this.url = localStorage.getItem("car_url");
    this.car = localStorage.getItem("car");
    this.country = localStorage.getItem("country");
    this.city = localStorage.getItem("city");
    this.pickupDate = localStorage.getItem("pickupDate");
    this.returnDate = localStorage.getItem("returnDate");
    this.km = localStorage.getItem("km");
    this.emission = localStorage.getItem("emission");
    
    console.log(this.url)
  }
}
