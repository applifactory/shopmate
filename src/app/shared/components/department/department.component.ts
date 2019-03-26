import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CategoriesService } from '@core/services';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Category, Department } from '@core/models';
import { DepartmentsService } from '@core/services';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.pug',
  styleUrls: ['./department.component.sass']
})
export class DepartmentComponent implements OnInit, OnDestroy {

  public categories$: BehaviorSubject<Category[]>;
  public department: Department;

  private departmentSub: Subscription;
  private departmentIdValue: number;

  @Input()
  public set departmentId(value: number) {
    this.categories$ = this.categoriesService.getDepartmentCategories(value);
    if ( this.departmentIdValue != value ) {
      this.departmentIdValue = value;
      this.getDepartmentDetails();
    }
  }

  constructor(
    private categoriesService: CategoriesService, 
    private departmentsService: DepartmentsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.departmentSub = this.departmentsService.departments$.subscribe( (departments: Department[]) => {
      this.getDepartmentDetails();
    });
  }

  ngOnDestroy() {
    this.departmentSub.unsubscribe();
  }

  private getDepartmentDetails() {
    this.department = null;
    const departments: Department[] = this.departmentsService.departments$.value;
    if ( this.departmentIdValue && departments && departments.length ) {
      this.department = departments.find( ( department: Department) => department.department_id === this.departmentIdValue )
    }
  }

}
