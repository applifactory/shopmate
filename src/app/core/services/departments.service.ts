import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Department } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }

  private _departments$: BehaviorSubject<Department[]>;
  public get departments$(): BehaviorSubject<Department[]> {
    if ( !this._departments$ ) {
    this._departments$ = new BehaviorSubject<Department[]>([]);
      this.getDepartments().subscribe();
    }
    return this._departments$;
  }

  public getDepartments(): Observable<Department[]> {
    return this.http
      .get<Department[]>( `${environment.API_URL}departments` )
      .pipe(
        tap( (departments: Department[]) => this.departments$.next(departments) ),
        catchError( (error) => throwError(error) )
      );
  }

}
