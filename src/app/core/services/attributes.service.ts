import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Attribute, AttributeValue, ProductAttribute } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  constructor(private http: HttpClient) { }

  public getAttributes(): Observable<Attribute[]> {
    return this.http
      .get<Attribute[]>( `${environment.API_URL}attributes`)
      .pipe(
        catchError( (error) => throwError(error) )
      );
  }

  public getAttribute(attributeId: number): Observable<Attribute> {
    return this.http
      .get<Attribute>( `${environment.API_URL}attributes/${attributeId}`)
      .pipe(
        catchError( (error) => throwError(error) )
      );
  }

  public getAttributeValues(attributeId: number): Observable<AttributeValue[]> {
    return this.http
      .get<AttributeValue[]>( `${environment.API_URL}attributes/values/${attributeId}`)
      .pipe(
        catchError( (error) => throwError(error) )
      );
  }

  public getProductAttributes(productId: number): Observable<ProductAttribute[]> {
    return this.http
      .get<ProductAttribute[]>( `${environment.API_URL}attributes/inProduct/${productId}`)
      .pipe(
        map( (response) => {
          let values: { [key: string]: ProductAttribute } = {};
          response.forEach( (item: any) => {
            let productAttribute: ProductAttribute = values[item.attribute_name] || <ProductAttribute>{ 
              name: item.attribute_name,
              values: []
            };
            productAttribute['values'].push({
              attribute_value_id: item.attribute_value_id,
              value: item.attribute_value
            });
            values[item.attribute_name] = productAttribute;
          })
          return Object.values(values);
        }),
        catchError( (error) => throwError(error) )
      );
  }
}
