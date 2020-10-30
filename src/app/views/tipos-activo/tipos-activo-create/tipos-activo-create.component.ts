import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/service/notification.service';
import { TiposActivoService } from 'src/app/service/tipos-activo.service';

@Component({
  selector: 'app-tipos-activo-create',
  templateUrl: './tipos-activo-create.component.html',
  styleUrls: ['./tipos-activo-create.component.css'],
})
export class TiposActivoCreateComponent implements OnInit {
  isNew: boolean;

  constructor(
    public service: TiposActivoService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<TiposActivoCreateComponent>
  ) {}

  ngOnInit(): void {
    this.service.getTiposActivo();
    this.isNew = this.service.form.get('id').value == null;
  }

  onClear(): void {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  onSubmit(): void {
    if (this.service.form.valid) this.isNew ? this.save() : this.update();
  }

  update(): void {
    this.service.updateTipoActivo(this.service.form.value).subscribe(
      (response: any) => {
        let msg = `Se ha actualizado con exito: ${response.nombre}`;
        this.close(msg);
      },
      (error: any) => {
        {
          let msg = 'No se ha cambiado la información';
          this.notificationService.success(msg);
          console.log(error);
        }
      }
    );
  }

  save(): void {
    this.service.createTipoActivo(this.service.form.value).subscribe(
      (response: any) => {
        let msg = `Se ha registrado con exito: ${response.nombre}`;
        this.close(msg);
      },
      (error: any) => {
        {
          let msg = 'Ha fallado el registro.';
          this.notificationService.success(msg);
          console.log(error);
        }
      }
    );
  }

  close(msg: string): void {
    this.notificationService.success(msg);
    this.service.getTiposActivo();
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
