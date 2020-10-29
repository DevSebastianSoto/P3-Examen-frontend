import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  @Input() public info = { icon: '', path: '', text: '' };
  constructor() {}

  ngOnInit(): void {}
}
