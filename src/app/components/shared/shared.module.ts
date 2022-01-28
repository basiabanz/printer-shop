import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  declarations: [
    MenuButtonComponent,
    IconButtonComponent
  
  ],
  imports: [
      CommonModule,
      RouterModule,
  ],
  exports: [
    MenuButtonComponent,
    IconButtonComponent
  ],
  providers: [],
})
export class SharedModule { }
