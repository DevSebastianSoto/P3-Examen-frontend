import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TiposActivoService } from 'src/app/service/tipos-activo.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TiposActivoCreateComponent } from '../tipos-activo-create/tipos-activo-create.component';
import { NotificationService } from 'src/app/service/notification.service';

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
    private notificationService: NotificationService,
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
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    this.dialog.open(TiposActivoCreateComponent, dialogConfig);
  }
  onEdit(row) {
    this._tiposActivoService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(TiposActivoCreateComponent, dialogConfig);
  }

  onDelete(id) {
    if (confirm('Are you sure to delete this record ?')) {
      this._tiposActivoService.deleteTipoActivo(id);
      this.notificationService.warn('! Deleted successfully');
    }
  }
}
