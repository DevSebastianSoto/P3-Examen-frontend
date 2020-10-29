import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TrabajadorService } from 'src/app/service/trabajador.service';

@Component({
  selector: 'app-trabajador-list',
  templateUrl: './trabajador-list.component.html',
  styleUrls: ['./trabajador-list.component.css'],
})
export class TrabajadorListComponent implements OnInit {
  tableData: MatTableDataSource<any>;
  columnNames: string[] = [
    'id',
    'nombre',
    'apellidos',
    'fecha',
    'estado',
    'acciones',
  ];

  busqueda: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public _trabajadorService: TrabajadorService) {}

  ngOnInit(): void {
    this._trabajadorService.getTrabajadores().subscribe((data) => {
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
