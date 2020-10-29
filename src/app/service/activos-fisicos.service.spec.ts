import { TestBed } from '@angular/core/testing';

import { ActivosFisicosService } from './activos-fisicos.service';

describe('ActivosFisicosService', () => {
  let service: ActivosFisicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivosFisicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
