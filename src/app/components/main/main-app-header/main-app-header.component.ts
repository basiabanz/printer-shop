import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemModel } from 'src/app/models/menuItemModel';

@Component({
  selector: 'main-app-header',
  templateUrl: './main-app-header.component.html',
  styleUrls: ['./main-app-header.component.less']
})
export class MainAppHeaderComponent implements OnInit {

  public menuItems: MenuItemModel[] = [{
    key: 'home',
    name: 'Home',
    url: '/home'
  },
  {
    key: 'about',
    name: 'About me',
    url: '/about'
  },
  {
    key: 'items',
    name: 'My items',
    url: '/myItems'
  },
  {
    key: 'contact',
    name: 'Contact',
    url: '/contact'
  }]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public changeSite(item: MenuItemModel): void {
    this.router.navigate([item.url])
 
  }

}
