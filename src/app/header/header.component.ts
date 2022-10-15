import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isMenuOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  clicked() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  onClickedOutside() {
    this.isMenuOpen = false;
  }
}
