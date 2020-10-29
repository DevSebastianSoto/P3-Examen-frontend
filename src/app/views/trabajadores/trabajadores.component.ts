import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Trabajador } from 'src/app/domain/Trabajador';
import { TrabajadorService } from 'src/app/service/trabajador.service';
import { Card } from 'src/app/domain/Cards';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css'],
})
export class TrabajadoresComponent implements OnInit {
  public trabajadores: Trabajador[] = [];
  public table: Card = { title: '', cols: 0, rows: 0 };
  public formCreate: Card = { title: '', cols: 0, rows: 0 };
  isHandset: boolean = false;
  isHandsetObserver: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        if (matches) {
          return true;
        }
        return false;
      })
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public _trabajadorService: TrabajadorService
  ) {}

  ngOnInit(): void {
    this._trabajadorService.getTrabajadores().subscribe((data) => {
      if (data.body != null) this.trabajadores = data.body;
      this.loadCards();
    });
    this.isHandsetObserver.subscribe((val) => {
      this.isHandset = val;
      this.loadCards();
    });
  }
  loadCards() {
    if (this.isHandset) {
      this.table = { title: 'Crear', cols: 4, rows: 1 };
      this.formCreate = { title: 'Listado', cols: 4, rows: 1 };
    } else {
      this.table = { title: 'Crear', cols: 1, rows: 1 };
      this.formCreate = { title: 'Listado', cols: 3, rows: 1 };
    }
  }
}
