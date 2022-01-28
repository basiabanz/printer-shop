
import { Injectable } from '@angular/core';
import { MenuItemModel } from 'src/app/models/menuItemModel';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

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

}
