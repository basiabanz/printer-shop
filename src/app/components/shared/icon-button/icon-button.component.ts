import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'icon-button',
    templateUrl: './icon-button.component.html',
    styleUrls: ['./icon-button.component.less'],
    standalone: true,
    imports: [NgClass]
})
export class IconButtonComponent implements OnInit {

  @Input() icon: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
