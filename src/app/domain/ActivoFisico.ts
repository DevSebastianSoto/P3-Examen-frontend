import { EstadoEnum } from './EstadoEnum';

export class ActivoFisico {
  id: number;
  nombre: String;
  descripcion: String;
  fechaIngreso: Date;
  cantidad: number;
  cantidadAsignados: number;
  idTipoActivo: number;
  estado: EstadoEnum;

  constructor(
    nombre: String,
    descripcion: String,
    fechaIngreso: Date,
    cantidad: number,
    cantidadAsignados: number,
    idTipoActivo: number,
    estado: EstadoEnum
  ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaIngreso = fechaIngreso;
    this.cantidad = cantidad;
    this.cantidadAsignados = cantidadAsignados;
    this.idTipoActivo = idTipoActivo;
    this.estado = estado;
  }
}
