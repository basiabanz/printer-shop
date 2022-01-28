import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemModel } from 'src/app/models/menuItemModel';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public contact: MenuItemModel;

  constructor(private router: Router, private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.contact = this.navigationService.menuItems.find(item => item.key === 'contact');
  }

  contactMe(): void {
      this.router.navigate([this.contact.url]);
  }
  

}
