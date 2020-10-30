import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivosFisicosService } from 'src/app/service/activos-fisicos.service';
import { NotificationService } from 'src/app/service/notification.service';
import { ActivosFisicosCreateComponent } from '../activos-fisicos-create/activos-fisicos-create.component';

@Component({
  selector: 'app-activos-fisicos-list',
  templateUrl: './activos-fisicos-list.component.html',
  styleUrls: ['./activos-fisicos-list.component.css'],
})
export class ActivosFisicosListComponent implements OnInit {
  tableData: MatTableDataSource<any>;

  columnNames: string[] = [
    'id',
    'idTipoActivo',
    'nombre',
    'descripcion',
    'cantidad',
    'cantidadAsignados',
    'fechaIngreso',
    'estado',
    'acciones',
  ];

  busqueda: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: ActivosFisicosService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.service.getActivosFisicos().subscribe((data: any) => {
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
    this.dialog.open(ActivosFisicosCreateComponent, dialogConfig);
  }

  onEdit(row: any) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    this.dialog.open(ActivosFisicosCreateComponent, dialogConfig);
  }

  onDelete(id) {
    if (confirm('Seguro que desea borrar este registro?')) {
      this.service.deleteActivoFisico(id).subscribe((response: any) => {
        this.notificationService.warn(
          'Se han eliminado los datos correctamente'
        );
      });
    }
  }
}
