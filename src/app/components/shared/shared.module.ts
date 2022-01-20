import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuButtonComponent } from './menu-button/menu-button.component';

@NgModule({
  declarations: [
    MenuButtonComponent
  
  ],
  imports: [
      CommonModule,
      RouterModule,
  ],
  exports: [
    MenuButtonComponent
  ],
  providers: [],
})
export class SharedModule { }
