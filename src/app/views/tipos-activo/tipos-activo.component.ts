import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Card } from 'src/app/domain/Cards';
import { Observable } from 'rxjs';
import { TiposActivoService } from 'src/app/service/tipos-activo.service';
import { TipoActivo } from 'src/app/domain/TipoActivo';

@Component({
  selector: 'app-tipos-activo',
  templateUrl: './tipos-activo.component.html',
  styleUrls: ['./tipos-activo.component.css'],
})
export class TiposActivoComponent implements OnInit {
  public tiposActivo: TipoActivo[] = [];
  public table: Card = { title: '', cols: 0, rows: 0 };
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
    public _tiposActivoService: TiposActivoService
  ) {}

  ngOnInit(): void {
    this._tiposActivoService.getTiposActivo().subscribe((data) => {
      if (data.body != null) this.tiposActivo = data.body;
      this.loadCards();
    });
    this.isHandsetObserver.subscribe((val) => {
      this.isHandset = val;
      this.loadCards();
    });
  }
  loadCards() {
    if (this.isHandset) {
      this.table = { title: 'Tipos de activos', cols: 4, rows: 1 };
    } else {
      this.table = { title: 'Tipos de activos', cols: 4, rows: 1 };
    }
  }
}
