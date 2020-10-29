import { EstadoEnum } from './EstadoEnum';

export class Trabajador {
  id: number;
  nombre: String;
  apellidos: String;
  fechaNacimiento: Date;
  estado: EstadoEnum;

  constructor(
    nombre: String,
    apellidos: String,
    fechaNacimiento: Date,
    estado: EstadoEnum
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.estado = estado;
  }
}
