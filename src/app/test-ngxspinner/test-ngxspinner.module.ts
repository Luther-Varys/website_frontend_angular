import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestNgxspinnerComponent } from './test-ngxspinner.component';
import { RouterModule } from '@angular/router';

//NgxSpinner
import { NgxSpinnerModule } from 'ngx-spinner';


export const routes = [
  // { path: '', component: GooglemapstestComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'ngx-spinner', pathMatch: 'full' },
  { path: 'ngx-spinner', component: TestNgxspinnerComponent },
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    //NgxSpinner
    NgxSpinnerModule,
  ],
  declarations: [
    TestNgxspinnerComponent
  ]
})
export class TestNgxspinnerModule { }
