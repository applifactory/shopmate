import { Component, OnInit, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DepartmentsService } from '@core/services';
import { Department } from '@core/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.pug',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  public mobileMenuOpen: boolean = false; 
  public departments$: BehaviorSubject<Department[]>;

  constructor( private departmentsService: DepartmentsService) {
    this.departments$ = this.departmentsService.departments$;
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  private onWindowScroll() {
    this.mobileMenuOpen = false;
  }

}
