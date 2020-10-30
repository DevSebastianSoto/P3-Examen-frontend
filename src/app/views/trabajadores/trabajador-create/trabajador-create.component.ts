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
  constructor(
    public service: TrabajadorService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<TrabajadorCreateComponent>
  ) {}

  ngOnInit(): void {
    this.service.getTrabajadores();
  }

  onClear(): void {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit(): void {
    if (this.service.form.valid) {
      this.service.createTrabajador(this.service.form.value).subscribe(
        (response) => {
          let msg = `Se ha registrado con exito: ${response.nombre}`;
          this.notificationService.success(msg);
          this.service.getTrabajadores();
          this.dialogRef.close();
        },
        (error) => {
          {
            let msg = 'Ha fallado el registro.';
            this.notificationService.success(msg);
            console.log(msg);
          }
        }
      );
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }
}
