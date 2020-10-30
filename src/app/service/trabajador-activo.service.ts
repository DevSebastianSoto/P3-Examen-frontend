import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EstadoEnum } from '../domain/EstadoEnum';

@Injectable({
  providedIn: 'root',
})
export class TrabajadorActivoService {
  private apiBase = 'http://localhost:8080/api/activo-trabajador';

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    idTrabajador: new FormControl(null, Validators.required),
    idActivoFisico: new FormControl(null, Validators.required),
    fechaAsignacion: new FormControl('', Validators.required),
    estado: new FormControl(true),
  });

  constructor(private http: HttpClient) {}

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      idTrabajador: null,
      idActivoFisico: null,
      fechaAsignacion: '',
      estado: false,
    });
  }

  createActivoDeTrabajador(
    idTrabajador: number,
    idActivoFisico: number,
    fechaAsignacion: any,
    estado: boolean
  ) {
    let estadoActivoTrabajador = estado
      ? EstadoEnum.ACTIVO
      : EstadoEnum.INACTIVO;
    const obj: any = {
      fechaAsignacion: fechaAsignacion,
      estado: estadoActivoTrabajador,
    };
    return this.http.post(
      `${this.apiBase}/${idTrabajador}/${idActivoFisico}`,
      obj
    );
  }

  deleteActivoDeTrabajador(id: number) {
    return this.http.delete(`${this.apiBase}/${id}`);
  }

  populateForm(row: any) {
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    let today = mm + '/' + dd + '/' + yyyy;
    this.form.setValue({
      id: null,
      idTrabajador: row.id,
      idActivoFisico: null,
      fechaAsignacion: new Date(today),
      estado: true,
    });
  }
}
