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
  constructor(
    public service: TiposActivoService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<TiposActivoCreateComponent>
  ) {}

  ngOnInit(): void {
    this.service.getTiposActivo();
  }

  onClear(): void {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit(): void {
    if (this.service.form.valid) {
      this.service.createTipoActivo(this.service.form.value).subscribe(
        (response) => {
          let msg = `Se ha registrado con exito: ${response.nombre}`;
          this.notificationService.success(msg);
          this.service.getTiposActivo();
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
