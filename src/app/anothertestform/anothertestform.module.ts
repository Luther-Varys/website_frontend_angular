import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AnothertestformComponent } from './anothertestform.component';


//Kendo
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
// Imports the Button module
import { ButtonModule } from '@progress/kendo-angular-buttons';
// Imports the ButtonGroup module
import { ButtonGroupModule } from '@progress/kendo-angular-buttons';
// import { CrudDboApplicationuserComponent } from './crud-dbo-applicationuser/crud-dbo-applicationuser.component';


// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const routes = [
  { path: '', component: AnothertestformComponent, pathMatch: 'full' }
];



@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),
    ReactiveFormsModule,
    DateInputsModule,
    InputsModule,
    ButtonModule,
    ButtonGroupModule
    // BrowserModule,
    // BrowserAnimationsModule
  ],
  declarations: [AnothertestformComponent]
})

export class AnothertestformModule { 
  static routes = routes;
}
