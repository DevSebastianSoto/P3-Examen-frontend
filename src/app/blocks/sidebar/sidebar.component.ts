import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public sideLinks = [
    { icon: 'fas fa-users', path: '', text: 'Trabajadores' },
    {
      icon: 'fas fa-network-wired',
      path: '/tipos-activos',
      text: 'Tipos de activos',
    },
    { icon: 'fas fa-desktop', path: '/activos', text: 'Activos' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
