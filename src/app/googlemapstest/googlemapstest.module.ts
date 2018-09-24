import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AgmCoreModule} from '@agm/core';

import { GooglemapstestComponent } from './googlemapstest.component';
import { AgmtestGeocodingComponent } from './agmtest-geocoding/agmtest-geocoding.component';
import { AgmtestReversegeocodingComponent } from './agmtest-reversegeocoding/agmtest-reversegeocoding.component'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes = [
  // { path: '', component: GooglemapstestComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'showmap', component: GooglemapstestComponent },
  { path: 'geocoding', component: AgmtestGeocodingComponent },
  { path: 'geocoding-reverse', component: AgmtestReversegeocodingComponent },
  // { path: 'dbo-applicationuser-read', component: DboApplicationuserReadComponent },
  // { path: 'dbo-applicationuser-readall', component: DboApplicationuserReadallComponent },
  // { path: 'dbo-applicationuser-update', component: DboApplicationuserUpdateComponent },
  // { path: 'dbo-applicationuser-delete', component: DboApplicationuserDeleteComponent },

  // { path: 'image-uploader', component: ImageuploaderComponent },
  // // { path: '', component: CrudDboApplicationuserComponent, pathMatch: 'full' }
  
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // AgmCoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeO7HeMKs0df444MtYfq5eAfsFWwN8s_Q',
      libraries: ["places"]
    })
  ],
  declarations: [
    GooglemapstestComponent,
    AgmtestGeocodingComponent,
    AgmtestReversegeocodingComponent
  ]
})
export class GooglemapstestModule { 
  static routes = routes;
}
