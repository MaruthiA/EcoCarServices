import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgolistService } from 'src/app/Services/ngolist.service';

@Component({
  selector: "app-offset",
  templateUrl: "./offset.component.html",
  styleUrls: ["./offset.component.scss"],
})
export class OffsetComponent implements OnInit {
  constructor(
    private router :Router,
    private route: ActivatedRoute,
    private searchService: NgolistService
  ) {}
  emission: any = "";
  ngoList: any = [];
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: { [x: string]: string }) => {
      this.emission = JSON.parse(params["profile"]);
      this.emission = this.emission / 1000000
      this.emission = this.emission.toFixed(2)
      localStorage.setItem("emission",this.emission)
      console.log(this.emission);
    });

    this.searchService.searchCars().subscribe((res) => {
      if (res.body.length) {
        this.ngoList = res.body;
        // this.searchService.setSearchResults(res.body);
        console.log(res.body);
        // this.router.navigate(["/offset"], {
        //   queryParams: { profile: JSON.stringify(res.body) },
        // });
      }
      // } else {
      //   this.carsUnavailable = true;
      // }
    });
    console.log(this.ngoList);
  }

  onSearch(url: any, name:any) {
    window.open(url, "_blank");
    localStorage.setItem("emission", this.emission);
    localStorage.setItem("org", name);
    this.router.navigateByUrl("certificate")

  }
  returnHome() {
    this.router.navigateByUrl("")
  }
}
