import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

export const routes = [
  { path: '', component: ProfileComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [ ProfileComponent ]
})
export class ProfileModule { }
