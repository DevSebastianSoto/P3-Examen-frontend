import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  @Input() public info = { ref: '', text: '' };

  constructor() {}

  ngOnInit(): void {}
}
