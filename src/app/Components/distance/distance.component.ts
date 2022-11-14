import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DistanceService } from 'src/app/Services/distance.service';

@Component({
  selector: "app-distance",
  templateUrl: "./distance.component.html",
  styleUrls: ["./distance.component.scss"],
})
export class DistanceComponent implements OnInit {
  constructor(
    private distanceservice: DistanceService,
    private dialog: MatDialog
  ) {}
  public response: any = "";
  ngOnInit(): void {}
  distance() {
    const to = (<HTMLInputElement>document.getElementById("to")).value;
    const from = (<HTMLInputElement>document.getElementById("from")).value;

    console.log(to, from);
    const data: any = "[" + to + "," + from + "]";
    const formData = new FormData();
    formData.append("text", data);
    this.distanceservice.searchCars(formData).subscribe((res) => {
      if (res.body.length) {
        this.response = res.body;
        //  this.leaders.sort(function (a: any, b: any) {
        //    return a.value - b.value;
        //  });
        console.log(this.response);
        alert(this.response);
          this.dialog.closeAll();
        
      }
    });
  }
}
