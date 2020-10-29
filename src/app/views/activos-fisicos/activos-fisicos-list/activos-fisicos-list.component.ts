import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivosFisicosService } from 'src/app/service/activos-fisicos.service';

@Component({
  selector: 'app-activos-fisicos-list',
  templateUrl: './activos-fisicos-list.component.html',
  styleUrls: ['./activos-fisicos-list.component.css'],
})
export class ActivosFisicosListComponent implements OnInit {
  tableData: MatTableDataSource<any>;

  columnNames: string[] = [
    'id',
    'nombre',
    'descripcion',
    'fechaIngreso',
    'cantidad',
    'cantidadAsignados',
    'idTipoActivo',
    'estado',
    'acciones',
  ];

  busqueda: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public _activoFisicoService: ActivosFisicosService) {}

  ngOnInit(): void {
    this._activoFisicoService.getActivosFisicos().subscribe((data) => {
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
