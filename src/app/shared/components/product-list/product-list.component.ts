import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoaderService, ProductsService } from '@core/services';
import { Product, ProductResults } from '@core/models';

const ITEMS_ON_PAGE: number = 12;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.pug',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public currentPage: number = 1;
  public products: Product[];
  public itemsOnPage: number = ITEMS_ON_PAGE;
  public itemsTotal: number = 0;

  @Input()
  public set departmentId(value: number) {
    this.departmentIdValue = value;
    this.paramsChange.next();
  }

  @Input()
  public set categoryId(value: number) {
    this.categoryIdValue = value;
    this.paramsChange.next();
  }

  @Input()
  public set searchQuery(value: string) {
    this.searchQueryValue = value;
    this.paramsChange.next();
  }

  private departmentIdValue: number;
  private categoryIdValue: number;
  private searchQueryValue: string;
  private paramsChange: Subject<void> = new Subject();
  private paramsChangeSub: Subscription;
  
  constructor(private loaderService: LoaderService, private productsService: ProductsService) {
    this.paramsChangeSub = this.paramsChange.pipe(debounceTime(100)).subscribe(() => this.loadProducts(1));
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.paramsChangeSub.unsubscribe();
  }

  private loadProducts(page: number = undefined) {
    this.currentPage = page !== undefined ? page : 1;
    this.loaderService.show();

    let request: Observable<ProductResults>;

    if ( this.searchQueryValue && this.searchQueryValue.trim().length ) {
      request = this.productsService.searchProducts(this.searchQueryValue, this.currentPage, ITEMS_ON_PAGE);
    } else
    if ( this.categoryIdValue ) {
      request = this.productsService.getCategoryProducts(this.categoryIdValue, this.currentPage, ITEMS_ON_PAGE);
    } else 
    if ( this.departmentIdValue ) {
      request = this.productsService.getDepartmentProducts(this.departmentIdValue, this.currentPage, ITEMS_ON_PAGE);
    } else {
      request = this.productsService.getProducts(this.currentPage, ITEMS_ON_PAGE);
    }
    
    request.subscribe( (results: ProductResults) => {
      this.currentPage = results.page;
      this.products = results.products;
      this.itemsTotal = results.total;
      this.loaderService.hide();
    }, () => {
      this.loaderService.hide();
      console.log('Sorry, we have a problems...');
    });
  }

}
