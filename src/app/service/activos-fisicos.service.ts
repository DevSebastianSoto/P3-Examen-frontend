import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivoFisico } from '../domain/ActivoFisico';

@Injectable({
  providedIn: 'root',
})
export class ActivosFisicosService {
  private apiBase = 'http://localhost:8080/api/activos-fisicos';

  constructor(private http: HttpClient) {}

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
