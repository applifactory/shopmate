import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DepartmentsService } from './departments.service';

describe('DepartmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: DepartmentsService = TestBed.get(DepartmentsService);
    expect(service).toBeTruthy();
  });
});
