import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivoFisico } from 'src/app/domain/ActivoFisico';
import { EstadoEnum } from 'src/app/domain/EstadoEnum';
import { ActivosFisicosService } from 'src/app/service/activos-fisicos.service';
import { NotificationService } from 'src/app/service/notification.service';
import { TrabajadorActivoService } from 'src/app/service/trabajador-activo.service';

@Component({
  selector: 'app-trabajador-asociar',
  templateUrl: './trabajador-asociar.component.html',
  styleUrls: ['./trabajador-asociar.component.css'],
})
export class TrabajadorAsociarComponent implements OnInit {
  isNew: boolean;
  listaActivosFisicos: any;

  constructor(
    public service: TrabajadorActivoService,
    public activosFisicosService: ActivosFisicosService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<TrabajadorAsociarComponent>
  ) {}

  ngOnInit(): void {
    this.isNew = this.service.form.get('idActivoFisico').value == null;
    this.activosFisicosService
      .getActivosFisicos()
      .subscribe((response: any) => {
        this.listaActivosFisicos = <ActivoFisico[]>response.body.filter(
          (item) => {
            let res =
              item.cantidad > item.cantidadAsignados &&
              item.estado == EstadoEnum.ACTIVO;
            console.log(res);
            return res;
          }
        );
        console.log(this.listaActivosFisicos);
      });
  }

  onClear(): void {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit(): void {
    if (this.service.form.valid) this.isNew ? this.save() : this.delete();
  }

  delete(): void {}

  save(): void {
    const vals = this.service.form.value;
    this.service
      .createActivoDeTrabajador(
        vals.idTrabajador,
        vals.idActivoFisico,
        vals.fechaAsignacion,
        vals.estado
      )
      .subscribe(
        (response: any) => {
          let msg = `Se asignó el activo correctamente!`;
          this.close(msg);
        },
        (error: any) => {
          {
            let msg = 'Ha fallado la asignación.';
            this.notificationService.warn(msg);
            console.log(error);
          }
        }
      );
  }

  close(msg: string): void {
    this.notificationService.success(msg);
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
