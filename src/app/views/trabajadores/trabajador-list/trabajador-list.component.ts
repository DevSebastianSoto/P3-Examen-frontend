import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/service/notification.service';
import { TrabajadorActivoService } from 'src/app/service/trabajador-activo.service';
import { TrabajadorService } from 'src/app/service/trabajador.service';
import { TrabajadorAsociarComponent } from '../trabajador-asociar/trabajador-asociar.component';
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
    public _trabajadorActivoService: TrabajadorActivoService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refreshTable();
  }

  refreshTable(): void {
    this._trabajadorService.getTrabajadores().subscribe((data: any) => {
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

  onEdit(row: any) {
    this._trabajadorService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    this.dialog.open(TrabajadorCreateComponent, dialogConfig);
  }

  onAssign(row: any) {
    this._trabajadorActivoService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    this.dialog.open(TrabajadorAsociarComponent, dialogConfig);
  }

  onDetails(row: any) {
    console.log(row);
  }

  onDelete(id) {
    if (confirm('Seguro que desea borrar este registro?')) {
      this._trabajadorService
        .deleteTrabajador(id)
        .subscribe((response: any) => {
          this.notificationService.warn(
            'Se han eliminado los datos correctamente'
          );
        });
    }
  }
}
