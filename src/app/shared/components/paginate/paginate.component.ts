import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.pug',
  styleUrls: ['./paginate.component.sass']
})
export class PaginateComponent implements OnInit {

  @Input()
  public itemsTotal: number;

  @Input()
  public itemsOnPage: number;

  @Input()
  public currentPage: number;

  @Output()
  public currentPageChanged: EventEmitter<number> = new EventEmitter<number>();

  public get totalPages(): number {
    return Math.max(1, Math.floor( (this.itemsTotal - 1) / Math.max(this.itemsOnPage, 1) ) + 1);
  }

  public setPage(value: number) {
    var newValue: number = Math.min( Math.max(value, 1), this.totalPages);
    if ( newValue != this.currentPage ) {
      this.currentPage = newValue;
      this.currentPageChanged.emit(newValue);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
