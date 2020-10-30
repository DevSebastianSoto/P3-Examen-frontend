import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TiposActivoService } from 'src/app/service/tipos-activo.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TiposActivoCreateComponent } from '../tipos-activo-create/tipos-activo-create.component';

@Component({
  selector: 'app-tipos-activo-list',
  templateUrl: './tipos-activo-list.component.html',
  styleUrls: ['./tipos-activo-list.component.css'],
})
export class TiposActivoListComponent implements OnInit {
  tableData: MatTableDataSource<any>;

  columnNames: string[] = ['id', 'nombre', 'descripcion', 'estado', 'acciones'];

  busqueda: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _tiposActivoService: TiposActivoService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._tiposActivoService.getTiposActivo().subscribe((data) => {
      if (data.body != null) {
        this.tableData = new MatTableDataSource(data.body);
        this.tableData.sort = this.sort;
        this.tableData.paginator = this.paginator;
      } else {
        this.tableData = new MatTableDataSource([]);
      }
    });
  }

  limpiarEnBusqueda() {
    this.busqueda = '';
    this.actualizarTabla();
  }
  actualizarTabla() {
    this.tableData.filter = this.busqueda.trim().toLowerCase();
  }
  agregarTipoActivo() {
    const dialogConfig = new MatDialogConfig();
    let data: any;
    this._tiposActivoService.createTipoActivo(data);
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    this.dialog.open(TiposActivoCreateComponent, dialogConfig);
  }
}
