import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivoFisico } from '../domain/ActivoFisico';
import { EstadoEnum } from '../domain/EstadoEnum';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ActivosFisicosService {
  private apiBase = 'http://localhost:8080/api/activos-fisicos';
  listaActivosFisicos: any;

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    idTipoActivo: new FormControl(null, Validators.required),
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    fechaIngreso: new FormControl('', Validators.required),
    cantidad: new FormControl(0),
    estado: new FormControl(true),
  });

  constructor(private http: HttpClient) {}

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      idTipoActivo: null,
      nombre: '',
      descripcion: '',
      fechaIngreso: '',
      cantidad: 0,
      estado: false,
    });
  }

  getActivosFisicos() {
    return this.http.get<ActivoFisico[]>(this.apiBase, {
      observe: 'response',
    });
  }

  getActivoFisico(id: number) {
    return this.http.get<ActivoFisico>(`${this.apiBase}/${id}`, {
      observe: 'response',
    });
  }

  createActivoFisico(ta: ActivoFisico) {
    ta.estado = ta.estado ? EstadoEnum.ACTIVO : EstadoEnum.INACTIVO;
    return this.http.post<ActivoFisico>(this.apiBase, ta);
  }

  updateActivoFisico(ta: ActivoFisico) {
    ta.estado = ta.estado ? EstadoEnum.ACTIVO : EstadoEnum.INACTIVO;
    return this.http.put(`${this.apiBase}/${ta.id}`, ta);
  }

  deleteActivoFisico(id: number) {
    return this.http.delete(`${this.apiBase}/${id}`);
  }

  populateForm(row: any) {
    this.form.setValue(_.omit(row, 'cantidadAsignados'));
  }
}
