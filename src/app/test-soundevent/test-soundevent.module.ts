import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TestSoundemitComponent } from './test-soundemit/test-soundemit.component';

export const routes = [
  // { path: '', component: GooglemapstestComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'soundemit', pathMatch: 'full' },
  { path: 'soundemit', component: TestSoundemitComponent },
  
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    TestSoundemitComponent
  ]
})
export class TestSoundeventModule { }
