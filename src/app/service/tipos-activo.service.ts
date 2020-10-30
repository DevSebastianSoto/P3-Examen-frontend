import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoActivo } from '../domain/TipoActivo';

@Injectable({
  providedIn: 'root',
})
export class TiposActivoService {
  private apiBase = 'http://localhost:8080/api/tipos-activo';
  listaTiposActivos: any;

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
      nombre: '',
      descripcion: '',
      estado: false,
    });
  }

  getTiposActivo() {
    this.listaTiposActivos = this.http.get<TipoActivo[]>(this.apiBase, {
      observe: 'response',
    });
    return this.listaTiposActivos;
  }

  getTipoActivo(id: number) {
    return this.http.get<TipoActivo>(`${this.apiBase}/${id}`, {
      observe: 'response',
    });
  }

  createTipoActivo(ta: TipoActivo) {
    return this.http.post<TipoActivo>(this.apiBase, ta);
  }

  updateTipoActivo(ta: TipoActivo) {
    return this.http.put(`${this.apiBase}/${ta.id}`, ta);
  }

  deleteTipoActivo(id: number) {
    return this.http.delete(`${this.apiBase}/${id}`);
  }
}
