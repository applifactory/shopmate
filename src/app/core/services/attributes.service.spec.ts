import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AttributesService } from './attributes.service';

describe('AttributesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: AttributesService = TestBed.get(AttributesService);
    expect(service).toBeTruthy();
  });
});
