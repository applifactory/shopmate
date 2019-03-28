import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';
import { ProductListItemComponent } from './product-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Product } from '@core/models';

const PRODUCT: Product = {
  product_id: 1,
  name: 'Product Name',
  description: 'Product description',
  price: 12.23,
  discounted_price: 11.22,
  thumbnail: 'thumbnail/image.ext'
}

describe('ProductListItemComponent', () => {
  let component: ProductListItemComponent;
  let fixture: ComponentFixture<ProductListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule, SharedModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListItemComponent);
    component = fixture.componentInstance;
    component.product = PRODUCT;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product details', () => {
    expect(fixture.nativeElement.querySelector('.name').innerText).toEqual(PRODUCT.name);
    expect(fixture.nativeElement.querySelector('.price span').innerText).toEqual(`$${PRODUCT.price}`);
    expect(fixture.nativeElement.querySelector('.price strong').innerText).toEqual(`$${PRODUCT.discounted_price}`);
    expect(fixture.nativeElement.querySelector('.description').innerText).toEqual(PRODUCT.description);
    expect(fixture.nativeElement.querySelector('img').src).toEqual(`https://backendapi.turing.com/images/products/${PRODUCT.thumbnail}`);
  });

  it('should link to product details', () => {
    expect(fixture.nativeElement.querySelector('.description').getAttribute('ng-reflect-router-link')).toEqual('/product/product-name-1');
  });

});
