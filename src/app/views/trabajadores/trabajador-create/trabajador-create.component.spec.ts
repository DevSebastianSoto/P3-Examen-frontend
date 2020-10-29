import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorCreateComponent } from './trabajador-create.component';

describe('TrabajadorCreateComponent', () => {
  let component: TrabajadorCreateComponent;
  let fixture: ComponentFixture<TrabajadorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
