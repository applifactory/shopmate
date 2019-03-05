import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiComponent } from '@app/ui/ui.component';
import { ProductsComponent } from '@app/products/products.component';

const routes: Routes = [
  {
    path: 'ui',
    component: UiComponent
  },
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: ':departmentLink',
    component: ProductsComponent
  },
  {
    path: ':departmentLink/:categoryLink',
    component: ProductsComponent
  },
  

  /*
    /
    /department-name-1
    /department-name-1/category-name-5
    /product/product-name-1
  */

  // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
