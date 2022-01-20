import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainAppHeaderComponent } from './main/main-app-header/main-app-header.component';
import { SharedModule } from './shared/shared.module';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [
    MainAppHeaderComponent
  
  ],
  imports: [
      CommonModule,
      RouterModule,
      SharedModule,
      ViewModule
  ],
  exports: [
      MainAppHeaderComponent
  ],
  providers: [],
})
export class ComponentsModule { }
