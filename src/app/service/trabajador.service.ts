import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabajador } from '../domain/Trabajador';

@Injectable({
  providedIn: 'root',
})
export class TrabajadorService {
  private apiBase = 'http://localhost:8080/api/trabajadores';

  constructor(private http: HttpClient) {}

  getTrabajadores() {
    return this.http.get<Trabajador[]>(this.apiBase, {
      observe: 'response',
    });
  }

  getTrabajador(id: number) {
    return this.http.get<Trabajador>(`${this.apiBase}/${id}`, {
      observe: 'response',
    });
  }
}
