import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Product, ProductLocation, ProductReview } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(page: number = 1, limit: number = 20): Observable<Product[]> {
    const params: HttpParams = new HttpParams()
      .set('limit', limit.toString())
      .set('page', page.toString());
    return this.http
      .get<Product[]>( `${environment.API_URL}products`, { params } )
      .pipe(
        map( (response) => (<any>response).rows ),
        catchError( (error) => throwError(error) )
      );
  }

  public searchProducts(query: string, page: number = 1, limit: number = 20): Observable<Product[]> {
    const params: HttpParams = new HttpParams()
      .set('query_string', query)
      .set('limit', limit.toString())
      .set('page', page.toString())
      .set('all_words', 'off');
    return this.http
      .get<Product[]>( `${environment.API_URL}products/search`, { params } )
      .pipe(
        map( (response) => (<any>response).rows ),
        catchError( (error) => throwError(error) )
      );
  }

  public getCategoryProducts(categoryId: number, page: number = 1, limit: number = 20): Observable<Product[]> {
    const params: HttpParams = new HttpParams()
      .set('limit', limit.toString())
      .set('page', page.toString());
    return this.http
      .get<Product[]>( `${environment.API_URL}products/inCategory/${categoryId}`, { params } )
      .pipe(
        map( (response) => (<any>response).rows ),
        catchError( (error) => throwError(error) )
      );
  }

  public getDepartmentProducts(departmentId: number, page: number = 1, limit: number = 20): Observable<Product[]> {
    const params: HttpParams = new HttpParams()
      .set('limit', limit.toString())
      .set('page', page.toString());
    return this.http
      .get<Product[]>( `${environment.API_URL}products/inDepartment/${departmentId}`, { params } )
      .pipe(
        map( (response) => (<any>response).rows ),
        catchError( (error) => throwError(error) )
      );
  }

  public getProduct(productId: number): Observable<Product> {
    return this.http
      .get<Product>( `${environment.API_URL}products/${productId}`)
      .pipe(
        catchError( (error) => throwError(error) )
      );
  }

  public getProductDetails(productId: number): Observable<Product> {
    return this.http
      .get<Product>( `${environment.API_URL}products/${productId}/details`)
      .pipe(
        map( (response) => (<any>response)[0] ),
        catchError( (error) => throwError(error) )
      );
  }

  public getProductLocations(productId: number): Observable<ProductLocation[]> {
    return this.http
      .get<ProductLocation[]>( `${environment.API_URL}products/${productId}/locations`)
      .pipe(
        catchError( (error) => throwError(error) )
      );
  }

  public getProductReviews(productId: number): Observable<ProductReview[]> {
    return this.http
      .get<ProductReview[]>( `${environment.API_URL}products/${productId}/reviews`)
      .pipe(
        catchError( (error) => throwError(error) )
      );
  }

}
