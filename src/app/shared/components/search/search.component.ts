import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router, Route, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { Subscription, fromEvent, merge } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.pug',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit, OnDestroy {

  public searchQuery: string;
  public focused: boolean;
  @ViewChild('searchInput') public searchInput: ElementRef;

  private subs: Subscription[] = [];
  private urlCodec: HttpUrlEncodingCodec = new HttpUrlEncodingCodec();
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // write :query from route to search input anter route changes
    this.subs.push(
      this.router.events.pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
        map((event: RouterEvent) => !event.url.indexOf('/search') ? event.url.replace(/^\/(search)?[\/]?/, '') : '' ),
        map((query: string) => this.urlCodec.decodeValue(query)),
        distinctUntilChanged()
      ).subscribe( (query: string) => {
        this.searchQuery = query;
      })
    );
    // update route with :query on search input changes
    this.subs.push(
      merge(
        fromEvent(this.searchInput.nativeElement, 'keyup'),
        fromEvent(this.searchInput.nativeElement, 'change')
      )
        .pipe(
          map((event: any) => event.target.value),
          debounceTime(750),
          distinctUntilChanged( (a: string, b: string) => a === b && !this.focused )
        )
        .subscribe( (query: string) => {
          if ( query && query.trim().length ) {
            this.router.navigate(['search', query]);
          } else {
            this.reset();
          }
        })
    );
    // focus blur state
    this.subs.push( 
      fromEvent(this.searchInput.nativeElement, 'focus')
        .subscribe( () => this.focused = true )
    );
    this.subs.push( 
      fromEvent(this.searchInput.nativeElement, 'blur')
        .pipe(
          debounceTime(250),
        )
        .subscribe( () => this.focused = false )
    );
  }

  ngOnDestroy() {
    this.subs.forEach( (sub: Subscription) => sub.unsubscribe() );
  }

  public search() {
    this.searchInput.nativeElement.focus();
  }

  public reset() {
    this.router.navigate(['/']);
  }

}
