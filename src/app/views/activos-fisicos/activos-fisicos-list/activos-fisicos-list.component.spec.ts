import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivosFisicosListComponent } from './activos-fisicos-list.component';

describe('ActivosFisicosListComponent', () => {
  let component: ActivosFisicosListComponent;
  let fixture: ComponentFixture<ActivosFisicosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivosFisicosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivosFisicosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
