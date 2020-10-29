import { TestBed } from '@angular/core/testing';

import { TiposActivoService } from './tipos-activo.service';

describe('TiposActivoService', () => {
  let service: TiposActivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposActivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
