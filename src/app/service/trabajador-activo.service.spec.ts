import { TestBed } from '@angular/core/testing';

import { TrabajadorActivoService } from './trabajador-activo.service';

describe('TrabajadorActivoService', () => {
  let service: TrabajadorActivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrabajadorActivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
