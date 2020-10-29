import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/domain/Trabajador';
import { TrabajadorService } from 'src/app/service/trabajador.service';

@Component({
  selector: 'app-trabajador-detail',
  templateUrl: './trabajador-detail.component.html',
  styleUrls: ['./trabajador-detail.component.css'],
})
export class TrabajadorDetailComponent implements OnInit {
  public trabajadores: Trabajador[] = [];

  constructor(public _trabajadorService: TrabajadorService) {}

  ngOnInit(): void {
    this._trabajadorService.getTrabajadores().subscribe((data) => {
      if (data.body != null) this.trabajadores = data.body;
    });
  }
}
