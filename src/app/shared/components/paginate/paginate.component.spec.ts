import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginateComponent } from './paginate.component';

describe('PaginateComponent', () => {
  let component: PaginateComponent;
  let fixture: ComponentFixture<PaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total pages', () => {
    component.itemsOnPage = 9;
    component.itemsTotal = 0;
    expect(component.totalPages).toEqual(1);
    component.itemsTotal = 8;
    expect(component.totalPages).toEqual(1);
    component.itemsTotal = 9;
    expect(component.totalPages).toEqual(1);
    component.itemsTotal = 10;
    expect(component.totalPages).toEqual(2);
    component.itemsTotal = 18;
    expect(component.totalPages).toEqual(2);
    component.itemsTotal = 19;
    expect(component.totalPages).toEqual(3);
  });

  it('should show back and next only for 3 and more pages', () => {
    const compiled = fixture.debugElement.nativeElement;
    
    component.itemsOnPage = 2;
    component.itemsTotal = 4;
    component.setPage(2);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(2);

    component.itemsTotal = 5;
    component.setPage(2);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(5);

    component.setPage(1);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(4);

  });

  it('should hide back or next when first or last page is selected', () => {
    const compiled = fixture.debugElement.nativeElement;
    
    component.itemsOnPage = 2;
    component.itemsTotal = 8;
    component.setPage(1);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(5);

    component.setPage(2);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(6);

    component.setPage(3);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(6);
  
    component.setPage(4);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(5);
  });

  it('should be hidden when only one page is available', () => {
    const compiled = fixture.debugElement.nativeElement;
    
    component.itemsOnPage = 2;
    component.itemsTotal = 2;
    fixture.detectChanges();
    expect(compiled.querySelectorAll('ul').length).toBe(0);

    component.itemsTotal = 3;
    fixture.detectChanges();
    expect(compiled.querySelectorAll('ul').length).toBe(1);

  });


});
