import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemModel } from 'src/app/models/menuItemModel';
import { NavigationService } from '../../services/navigation.service';
import { MenuButtonComponent } from '../../shared/menu-button/menu-button.component';
import { NgFor } from '@angular/common';
import { IconButtonComponent } from '../../shared/icon-button/icon-button.component';

@Component({
    selector: 'main-app-header',
    templateUrl: './main-app-header.component.html',
    styleUrls: ['./main-app-header.component.less'],
    standalone: true,
    imports: [NgFor, MenuButtonComponent, IconButtonComponent]
})
export class MainAppHeaderComponent implements OnInit {
    public menuItems: MenuItemModel[] = [];

    constructor(private router: Router, private navigationService: NavigationService) {}

    ngOnInit(): void {
        this.menuItems = this.navigationService.menuItems;
    }

    public changeSite(item: MenuItemModel): void {
        this.router.navigate([item.url]);
    }
}
