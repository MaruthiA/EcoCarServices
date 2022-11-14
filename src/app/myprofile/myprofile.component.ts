/** @format */

import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { DistanceComponent } from "../Components/distance/distance.component";
import { PredictionsService } from "../Services/predictions.service";
@Component({
  selector: "app-myprofile",
  templateUrl: "./myprofile.component.html",
  styleUrls: ["./myprofile.component.scss"],
})
export class MyprofileComponent implements OnInit {
  car: any = [];

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private searchService: PredictionsService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: { [x: string]: string }) => {
      this.car = JSON.parse(params["profile"]);
      console.log(this.car);
      localStorage.setItem("car", this.car.Make + this.car.Model)
      localStorage.setItem("car_url",this.car.url)
    });
  }

  onSearch() {
    const load = (<HTMLInputElement>document.getElementById("people")).value;
    console.log(load);
    const driven = + (<HTMLInputElement>document.getElementById("km")).value;
    localStorage.setItem("km", ""+driven);
    // console.log(this.car["id")
    const formData = new FormData();
    formData.append("text", this.car["id"]);
    this.searchService.searchCars(formData).subscribe((res) => {
      if (res.body.length) {
        let emission = res.body
        emission = emission.slice(1,-1)
        // this.searchService.setSearchResults(res.body);
        console.log(res.body)
        alert("Your Booking is confirmed")
        this.router.navigate(["/offset"], {
          queryParams: { profile: JSON.stringify( Number(emission) * driven ) },
        });
      }
      // } else {
      //   this.carsUnavailable = true;
      // }
    });
  }

  distanceSearch() {
    this.dialog.open(DistanceComponent, {
      minWidth: "50%",
      maxWidth: "50%",
    });
  }
    
  
}
