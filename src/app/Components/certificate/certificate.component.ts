import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-certificate",
  templateUrl: "./certificate.component.html",
  styleUrls: ["./certificate.component.scss"],
})
export class CertificateComponent implements OnInit {
  public name: any = "Prince Amit";
  public emission: any = "435435";
  public org: any = "kalpavriksha foundation";
  public day:any = ""
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.name = localStorage.getItem("user");
    this.emission = localStorage.getItem("emission");
    this.org = localStorage.getItem("org");
    this.day = new Date();
    // this.day = d.getDate();
  }
  returnHome() {
    this.router.navigateByUrl("");
  }
}
