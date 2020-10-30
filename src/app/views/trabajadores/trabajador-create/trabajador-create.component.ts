import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/service/notification.service';
import { TrabajadorService } from 'src/app/service/trabajador.service';

@Component({
  selector: 'app-trabajador-create',
  templateUrl: './trabajador-create.component.html',
  styleUrls: ['./trabajador-create.component.css'],
})
export class TrabajadorCreateComponent implements OnInit {
  isNew: boolean;

  constructor(
    public service: TrabajadorService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<TrabajadorCreateComponent>
  ) {}

  ngOnInit(): void {
    this.service.getTrabajadores();
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
    this.service.updateTrabajador(this.service.form.value).subscribe(
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
    this.service.createTrabajador(this.service.form.value).subscribe(
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
    this.service.getTrabajadores();
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
