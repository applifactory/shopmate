import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Category } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>( `${environment.API_URL}categories` )
      .pipe(
        map( (response) => (<any>response).rows ),
        catchError( (error) => throwError(error) )
      );
  }

  public getDepartmentCategories(departmentId: number): Observable<Category[]> {
    return this.http
      .get<Category[]>( `${environment.API_URL}categories/inDepartment/${departmentId}` )
      .pipe(
        catchError( (error) => throwError(error) )
      );
  }

  public getProductCategories(productId: number): Observable<Category[]> {
    return this.http
      .get<Category[]>( `${environment.API_URL}categories/inProduct/${productId}` )
      .pipe(
        catchError( (error) => throwError(error) )
      );
  }

  public getCategory(categoryId: number): Observable<Category> {
    return this.http
      .get<Category>( `${environment.API_URL}categories/${categoryId}` )
      .pipe(
        catchError( (error) => throwError(error) )
      );
  }

}
