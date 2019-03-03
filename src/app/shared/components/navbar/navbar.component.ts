import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.pug',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  public mobileMenuOpen: boolean = false; 

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  private onWindowScroll() {
    this.mobileMenuOpen = false;
  }

}
