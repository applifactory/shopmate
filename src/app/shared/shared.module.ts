import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PermalinkPipe } from './pipes/permalink.pipe';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { LoaderComponent } from './components/loader/loader.component';

const PROVIDERS = []

@NgModule({
  declarations: [
    NavbarComponent,
    PermalinkPipe,
    ProductListComponent,
    ProductListItemComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    PermalinkPipe,
    ProductListComponent,
    LoaderComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: PROVIDERS
    };
  }
}
