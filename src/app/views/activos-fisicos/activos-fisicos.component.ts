import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Card } from 'src/app/domain/Cards';
import { Observable } from 'rxjs';
import { ActivoFisico } from 'src/app/domain/ActivoFisico';
import { ActivosFisicosService } from 'src/app/service/activos-fisicos.service';

@Component({
  selector: 'app-activos-fisicos',
  templateUrl: './activos-fisicos.component.html',
  styleUrls: ['./activos-fisicos.component.css'],
})
export class ActivosFisicosComponent implements OnInit {
  public activoFisico: ActivoFisico[] = [];
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
    public _activoFisicoService: ActivosFisicosService
  ) {}

  ngOnInit(): void {
    this._activoFisicoService.getActivosFisicos().subscribe((data) => {
      if (data.body != null) this.activoFisico = data.body;
      this.loadCards();
    });
    this.isHandsetObserver.subscribe((val) => {
      this.isHandset = val;
      this.loadCards();
    });
  }
  loadCards() {
    if (this.isHandset) {
      this.table = { title: 'Activos Físicos', cols: 4, rows: 1 };
    } else {
      this.table = { title: 'Activos Físicos', cols: 4, rows: 1 };
    }
  }
}
