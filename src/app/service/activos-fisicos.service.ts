import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivoFisico } from '../domain/ActivoFisico';

@Injectable({
  providedIn: 'root',
})
export class ActivosFisicosService {
  private apiBase = 'http://localhost:8080/api/activos-fisicos';
  listaActivosFisicos: any;

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
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
      cantidadAsignados: 0,
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
}
