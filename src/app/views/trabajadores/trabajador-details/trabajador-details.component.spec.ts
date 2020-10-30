import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorDetailsComponent } from './trabajador-details.component';

describe('TrabajadorDetailsComponent', () => {
  let component: TrabajadorDetailsComponent;
  let fixture: ComponentFixture<TrabajadorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
