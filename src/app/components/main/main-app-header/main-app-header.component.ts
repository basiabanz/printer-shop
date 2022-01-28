import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemModel } from 'src/app/models/menuItemModel';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'main-app-header',
  templateUrl: './main-app-header.component.html',
  styleUrls: ['./main-app-header.component.less']
})
export class MainAppHeaderComponent implements OnInit {

  public menuItems: MenuItemModel[] = [];

  constructor(private router: Router, private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.menuItems = this.navigationService.menuItems;
  }

  public changeSite(item: MenuItemModel): void {
    this.router.navigate([item.url])
 
  }

}
