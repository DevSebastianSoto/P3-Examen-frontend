import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivosFisicosService } from 'src/app/service/activos-fisicos.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-activos-fisicos-create',
  templateUrl: './activos-fisicos-create.component.html',
  styleUrls: ['./activos-fisicos-create.component.css'],
})
export class ActivosFisicosCreateComponent implements OnInit {
  isNew: boolean;

  constructor(
    public service: ActivosFisicosService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<ActivosFisicosCreateComponent>
  ) {}

  ngOnInit(): void {
    this.service.getActivosFisicos();
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
    this.service.updateActivoFisico(this.service.form.value).subscribe(
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
    this.service.createActivoFisico(this.service.form.value).subscribe(
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
    this.service.getActivosFisicos();
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
