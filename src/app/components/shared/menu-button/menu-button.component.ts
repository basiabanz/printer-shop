import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'menu-button',
    templateUrl: './menu-button.component.html',
    styleUrls: ['./menu-button.component.less'],
    standalone: true
})
export class MenuButtonComponent implements OnInit {

  @Input() buttonText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
