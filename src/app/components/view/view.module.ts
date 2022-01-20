import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ItemsComponent
  ],
  imports: [
      CommonModule,
      RouterModule
  ],
  exports: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ItemsComponent
  ],
  providers: [],
})
export class ViewModule { }
