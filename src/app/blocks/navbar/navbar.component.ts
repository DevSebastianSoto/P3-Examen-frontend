import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public navLinks = [
    { ref: '/home', text: 'Home' },
    { ref: '/trabajadores', text: 'Trabajadores' },
    { ref: '/activos', text: 'Activos' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
