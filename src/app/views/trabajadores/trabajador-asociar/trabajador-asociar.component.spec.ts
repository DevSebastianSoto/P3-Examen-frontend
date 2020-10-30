import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorAsociarComponent } from './trabajador-asociar.component';

describe('TrabajadorAsociarComponent', () => {
  let component: TrabajadorAsociarComponent;
  let fixture: ComponentFixture<TrabajadorAsociarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorAsociarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadorAsociarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
