import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { JoditAngularModule } from 'jodit-angular';

import { WysiwygJoditComponent } from './wysiwyg-jodit/wysiwyg-jodit.component';
import { NgxSpinnerModule } from 'ngx-spinner';

export const routes = [
  { path: '', redirectTo: 'wysiwyg-jodit', pathMatch: 'full' },
  { path: 'wysiwyg-jodit', component: WysiwygJoditComponent },
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    JoditAngularModule, // <- Important part
    //NgxSpinner
    NgxSpinnerModule,
  ],
  declarations: [
    WysiwygJoditComponent
  ]
})
export class TestWysiwygModule { }
