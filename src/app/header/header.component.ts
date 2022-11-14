/** @format */

import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { SigninSignupComponent } from "../Components/signin-signup/signin-signup.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public isMenuOpen: boolean = false;

  constructor(private dialog: MatDialog, private router: Router) {}
  public show: boolean = true;
  ngOnInit(): void {
    const val = localStorage.getItem("logggedin");
    console.log(val);
    if (val == "true") {
      this.show = false;
    }
  }

  clicked() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClickedOutside() {
    this.isMenuOpen = false;
  }

  onRegisterLoginClick() {
    this.dialog.open(SigninSignupComponent, {
      minWidth: "50%",
      maxWidth: "50%",
    });
  }
  onLeaderboardClick() {
    this.router.navigateByUrl("leaderboard");
  }

  onlogoutClick() {
    localStorage.setItem("logggedin", "false");
    location.reload();
    this.router.navigateByUrl("home");
    
  }
}
