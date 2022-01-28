import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.less']
})
export class IconButtonComponent implements OnInit {

  @Input() icon: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
