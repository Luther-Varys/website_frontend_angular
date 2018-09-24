import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CrudAutogenComponent } from './crud-autogen.component';
import { ReactiveFormsModule } from '@angular/forms';


//Kendo
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonModule, ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { UploadModule } from '@progress/kendo-angular-upload';

import { DboApplicationuserCreateComponent } from './dbo-applicationuser-create/dbo-applicationuser-create.component';
import { DboApplicationuserReadComponent } from './dbo-applicationuser-read/dbo-applicationuser-read.component';
import { DboApplicationuserReadallComponent } from './dbo-applicationuser-readall/dbo-applicationuser-readall.component';
import { DboApplicationuserUpdateComponent } from './dbo-applicationuser-update/dbo-applicationuser-update.component';
import { DboApplicationuserDeleteComponent } from './dbo-applicationuser-delete/dbo-applicationuser-delete.component';
import { ImageuploaderComponent } from './imageuploader/imageuploader.component';


export const routes = [
  { path: '', component: CrudAutogenComponent, pathMatch: 'full' },

  { path: 'dbo-applicationuser-create', component: DboApplicationuserCreateComponent },
  { path: 'dbo-applicationuser-read', component: DboApplicationuserReadComponent },
  { path: 'dbo-applicationuser-readall', component: DboApplicationuserReadallComponent },
  { path: 'dbo-applicationuser-update', component: DboApplicationuserUpdateComponent },
  { path: 'dbo-applicationuser-delete', component: DboApplicationuserDeleteComponent },

  { path: 'image-uploader', component: ImageuploaderComponent },
  // { path: '', component: CrudDboApplicationuserComponent, pathMatch: 'full' }
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    //Kendo
    DateInputsModule,
    InputsModule,
    ButtonModule,
    ButtonGroupModule,

    UploadModule
  ],
  declarations: [
    CrudAutogenComponent,
    
    DboApplicationuserCreateComponent,
    DboApplicationuserReadComponent,
    DboApplicationuserReadallComponent,
    DboApplicationuserUpdateComponent,
    DboApplicationuserDeleteComponent,
    ImageuploaderComponent,
  ]
})
export class CrudAutogenModule {
  static routes = routes;
 }
