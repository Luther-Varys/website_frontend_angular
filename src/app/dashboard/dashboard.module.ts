import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WidgetModule } from '../layout/widget/widget.module';
import { AuthService } from '../auth/auth.service';

export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes), WidgetModule ],
  declarations: [ DashboardComponent ],
  providers: [
    AuthService
  ]
})
export class DashboardModule {
  static routes = routes;
}
