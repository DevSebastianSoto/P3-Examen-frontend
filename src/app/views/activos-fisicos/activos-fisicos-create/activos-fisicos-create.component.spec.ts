import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivosFisicosCreateComponent } from './activos-fisicos-create.component';

describe('ActivosFisicosCreateComponent', () => {
  let component: ActivosFisicosCreateComponent;
  let fixture: ComponentFixture<ActivosFisicosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivosFisicosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivosFisicosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
