import { Component, OnInit } from '@angular/core';
import { CategoriesService, DepartmentsService } from '../core/services';
import { Category, Department } from '../core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private categoriesService: CategoriesService,
    private departmentsService: DepartmentsService
  ) { }

  ngOnInit() {
  }

}
