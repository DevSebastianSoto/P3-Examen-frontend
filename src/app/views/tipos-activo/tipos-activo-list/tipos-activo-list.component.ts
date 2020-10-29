import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TiposActivoService } from 'src/app/service/tipos-activo.service';

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

  constructor(public _tiposActivoService: TiposActivoService) {}

  ngOnInit(): void {
    this._tiposActivoService.getTrabajadores().subscribe((data) => {
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
}
