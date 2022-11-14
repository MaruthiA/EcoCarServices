/** @format */

import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { LoginService } from "src/app/Services/login.service";
import { RegisterService } from "src/app/Services/register.service";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-signin-signup",
  templateUrl: "./signin-signup.component.html",
  styleUrls: ["./signin-signup.component.scss"],
})
export class SigninSignupComponent implements OnInit {
  constructor(
    private registerService: RegisterService,
    private loginService: LoginService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  private response: any = "";
  public open: boolean = true;
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl("", [Validators.required]);

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {}
  sign() {
    const email = (<HTMLInputElement>document.getElementById("email")).value;
    const pass = (<HTMLInputElement>document.getElementById("pass")).value;

    console.log(email, pass);
    const data: any = "[" + email + "," + pass + "]";
    const formData = new FormData();
    formData.append("text", data);
    this.loginService.searchCars(formData).subscribe((res) => {
      if (res.body.length) {
        this.response = res.body;
        //  this.leaders.sort(function (a: any, b: any) {
        //    return a.value - b.value;
        //  });
        console.log(this.response);
        alert(this.response);
        if (this.response == "verified succesfully") {
          localStorage.setItem("logggedin", "true");
          localStorage.setItem("user", email);
          this.dialog.closeAll();
          location.reload()
          this.router.navigateByUrl("");
          
        }
      }
    });
  }
  register() {
    const email = (<HTMLInputElement>document.getElementById("email")).value;
    const pass = (<HTMLInputElement>document.getElementById("pass")).value;

    const fname = (<HTMLInputElement>document.getElementById("fname")).value;
    const lname = (<HTMLInputElement>document.getElementById("lname")).value;
    console.log(email, pass, fname, lname);
    const data: any = "[" + email + "," + pass + "]";
    const formData = new FormData();
    formData.append("text", data);
    this.registerService.searchCars(formData).subscribe((res) => {
      if (res.body.length) {
        this.response = res.body;
        //  this.leaders.sort(function (a: any, b: any) {
        //    return a.value - b.value;
        //  });
        console.log(this.response);
        alert(this.response);
        location.reload()
        this.router.navigateByUrl("")
      }
    });
  }
}
