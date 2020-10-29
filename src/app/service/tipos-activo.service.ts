import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoActivo } from '../domain/TipoActivo';

@Injectable({
  providedIn: 'root',
})
export class TiposActivoService {
  private apiBase = 'http://localhost:8080/api/tipos-activo';

  constructor(private http: HttpClient) {}

  getTrabajadores() {
    return this.http.get<TipoActivo[]>(this.apiBase, {
      observe: 'response',
    });
  }

  getTrabajador(id: number) {
    return this.http.get<TipoActivo>(`${this.apiBase}/${id}`, {
      observe: 'response',
    });
  }
}
