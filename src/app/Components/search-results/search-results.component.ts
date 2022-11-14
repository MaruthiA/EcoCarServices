/** @format */

import { Component, OnInit } from "@angular/core";
import { SearchService } from "src/app/Services/search.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent implements OnInit {
  constructor(private searchService: SearchService, private router: Router) {}
  carList: any = [];
  public show = false
  ngOnInit(): void {
    const val = localStorage.getItem("logggedin");
    console.log(val);
    if (val == "true") {
      this.show = true;
    }
    this.carList = this.searchService.getSearchresults();
    this.carList.sort(function (a: any, b: any) {
      return a.CO2_Emissions - b.CO2_Emissions;
    });
    console.log(this.carList);
    
  }
  onSearch(index: any) {
    // console.log(this.carList[index]);
    this.router.navigate(["/Myprofile"], {
      queryParams: { profile: JSON.stringify(this.carList[index]) },
    });
  }
}
