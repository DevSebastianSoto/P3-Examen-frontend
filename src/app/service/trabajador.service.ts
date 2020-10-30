import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstadoEnum } from '../domain/EstadoEnum';
import { Trabajador } from '../domain/Trabajador';

@Injectable({
  providedIn: 'root',
})
export class TrabajadorService {
  private apiBase = 'http://localhost:8080/api/trabajadores';
  listaTrabajadores: any;

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    fechaNacimiento: new FormControl('', Validators.required),
    estado: new FormControl(true),
  });

  constructor(private http: HttpClient) {}

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nombre: '',
      apellidos: '',
      fechaNacimiento: '',
      estado: false,
    });
  }

  getTrabajadores() {
    this.listaTrabajadores = this.http.get<Trabajador[]>(this.apiBase, {
      observe: 'response',
    });
    return this.listaTrabajadores;
  }

  getTrabajador(id: number) {
    return this.http.get<Trabajador>(`${this.apiBase}/${id}`, {
      observe: 'response',
    });
  }

  createTrabajador(ta: Trabajador) {
    ta.estado = ta.estado ? EstadoEnum.ACTIVO : EstadoEnum.INACTIVO;
    return this.http.post<Trabajador>(this.apiBase, ta);
  }

  updateTrabajador(ta: Trabajador) {
    ta.estado = ta.estado ? EstadoEnum.ACTIVO : EstadoEnum.INACTIVO;
    return this.http.put(`${this.apiBase}/${ta.id}`, ta);
  }

  deleteTrabajador(id: number) {
    return this.http.delete(`${this.apiBase}/${id}`);
  }

  populateForm(ta: Trabajador) {
    this.form.setValue(ta);
  }
}
