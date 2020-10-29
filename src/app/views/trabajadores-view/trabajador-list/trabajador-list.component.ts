import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/domain/Trabajador';
import { TrabajadorService } from 'src/app/service/trabajador.service';

@Component({
  selector: 'app-trabajador-list',
  templateUrl: './trabajador-list.component.html',
  styleUrls: ['./trabajador-list.component.css'],
})
export class TrabajadorListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  public trabajadores: Trabajador[] = [];

  constructor(public _trabajadorService: TrabajadorService) {}

  ngOnInit(): void {
    this._trabajadorService.getTrabajadores().subscribe((data) => {
      if (data.body != null) this.trabajadores = data.body;
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 16,
      scrollCollapse: true,
      order: [[0, 'desc']],
    };
  }
}
