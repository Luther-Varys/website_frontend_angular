import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WidgetModule } from '../layout/widget/widget.module';
import { AuthService } from '../auth/auth.service';

import localeDe from '@angular/common/locales/de';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeIt from '@angular/common/locales/it';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeDe);
registerLocaleData(localeEs);
registerLocaleData(localeFr);
registerLocaleData(localeIt);
registerLocaleData(localeRu);


//KENDO
import '@progress/kendo-angular-intl/locales/ru/all';

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
