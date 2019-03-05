import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AttributesService, CategoriesService, DepartmentsService, LoaderService, ProductsService } from './services';

const PROVIDERS = [
  AttributesService,
  CategoriesService,
  DepartmentsService,
  LoaderService,
  ProductsService
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    HttpClientModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: PROVIDERS
    };
  }
}
