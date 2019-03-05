import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from '@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  public isLoading$: BehaviorSubject<boolean>;
  constructor(private loaderService: LoaderService) {
    this.isLoading$ = loaderService.isLoading$;
  }

}
