import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadoresViewComponent } from './trabajadores-view.component';

describe('TrabajadoresViewComponent', () => {
  let component: TrabajadoresViewComponent;
  let fixture: ComponentFixture<TrabajadoresViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadoresViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadoresViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
