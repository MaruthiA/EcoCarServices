import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninSignupComponent } from '../Components/signin-signup/signin-signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isMenuOpen: boolean = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  clicked() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  onClickedOutside() {
    this.isMenuOpen = false;
  }

  onRegisterLoginClick(){
    this.dialog.open(SigninSignupComponent, {
      minWidth:'50%',
      maxWidth:'50%'
    })
  }
}
