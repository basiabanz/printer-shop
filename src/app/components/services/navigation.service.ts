import { Injectable } from '@angular/core';
import { MenuItemModel } from 'src/app/models/menuItemModel';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public menuItems: MenuItemModel[] = [
        {
            key: 'home',
            name: 'Home',
            url: '/home'
        },
        {
            key: 'work',
            name: 'My works',
            url: '/work'
        },
        {
            key: 'shop',
            name: 'Shop',
            url: '/shop'
        },
        {
            key: 'contact',
            name: 'Contact',
            url: '/contact'
        }
    ];
}
