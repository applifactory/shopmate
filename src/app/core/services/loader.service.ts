import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private activeLoaders: number = 0;

  public show() {
    this.activeLoaders++;
    if ( !this.isLoading$.getValue() ) {
      this.isLoading$.next(true);
    }
  }

  public hide() {
    this.activeLoaders--;
    if ( this.isLoading$.getValue() && !this.activeLoaders ) {
      this.isLoading$.next(false);
    }
  }

}
