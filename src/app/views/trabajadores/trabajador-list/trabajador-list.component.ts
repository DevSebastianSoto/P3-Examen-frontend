import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/service/notification.service';
import { TrabajadorService } from 'src/app/service/trabajador.service';
import { TrabajadorCreateComponent } from '../trabajador-create/trabajador-create.component';

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

  constructor(
    public _trabajadorService: TrabajadorService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {}

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

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    this.dialog.open(TrabajadorCreateComponent, dialogConfig);
  }

  onEdit(row) {
    this._trabajadorService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(TrabajadorCreateComponent, dialogConfig);
  }

  onDelete(id) {
    if (confirm('Are you sure to delete this record ?')) {
      this._trabajadorService.deleteTrabajador(id);
      this.notificationService.warn('! Deleted successfully');
    }
  }
}
