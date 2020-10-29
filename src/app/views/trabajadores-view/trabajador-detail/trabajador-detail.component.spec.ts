import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorDetailComponent } from './trabajador-detail.component';

describe('TrabajadorDetailComponent', () => {
  let component: TrabajadorDetailComponent;
  let fixture: ComponentFixture<TrabajadorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
