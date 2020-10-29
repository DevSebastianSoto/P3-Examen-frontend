import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposActivoListComponent } from './tipos-activo-list.component';

describe('TiposActivoListComponent', () => {
  let component: TiposActivoListComponent;
  let fixture: ComponentFixture<TiposActivoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposActivoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposActivoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
