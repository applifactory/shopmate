import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PermalinkPipe } from './pipes/permalink.pipe';

const PROVIDERS = []

@NgModule({
  declarations: [
    NavbarComponent,
    PermalinkPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
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
