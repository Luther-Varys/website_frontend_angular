import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WidgetModule } from '../layout/widget/widget.module';
import { AuthService } from '../auth/auth.service';


//KENDO
// Imports the Button module
import { ButtonModule } from '@progress/kendo-angular-buttons';
// Imports the ButtonGroup module
import { ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [ 
    CommonModule, 
    RouterModule.forChild(routes), 
    WidgetModule,
    //Kendo
    ButtonModule, 
    ButtonGroupModule,
    GridModule  
  ],
  declarations: [ DashboardComponent ],
  providers: [
    AuthService
  ]
})
export class DashboardModule {
  static routes = routes;
}
