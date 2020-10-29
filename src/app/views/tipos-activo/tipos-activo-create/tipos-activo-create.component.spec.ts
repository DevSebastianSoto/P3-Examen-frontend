import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposActivoCreateComponent } from './tipos-activo-create.component';

describe('TiposActivoCreateComponent', () => {
  let component: TiposActivoCreateComponent;
  let fixture: ComponentFixture<TiposActivoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposActivoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposActivoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
