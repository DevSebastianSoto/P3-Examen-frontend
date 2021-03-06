import { ActivoFisico } from './ActivoFisico';
import { EstadoEnum } from './EstadoEnum';

export class TipoActivo {
  id: number;
  nombre: String;
  descripcion: String;
  estado: EstadoEnum;
  activosFisicos: ActivoFisico[];

  constructor(nombre: String, apellidos: String, estado: EstadoEnum) {
    this.nombre = nombre;
    this.descripcion = apellidos;
    this.estado = estado;
  }
}
