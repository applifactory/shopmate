import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.pug',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public departmentId: number;
  public categoryId: number;

  private paramsSub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSub = this.route.params
      .subscribe((params: { departmentLink?: string, categoryLink?: string }) => {
        this.departmentId = parseInt( (params.departmentLink||'').replace(/^(.*-)?(\d+)$/, '$2') ) || undefined;
        this.categoryId = parseInt( (params.categoryLink||'').replace(/^(.*-)?(\d+)$/, '$2') ) || undefined;
      });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
