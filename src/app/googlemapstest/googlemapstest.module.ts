import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AgmCoreModule} from '@agm/core';

import { GooglemapstestComponent } from './googlemapstest.component';
import { AgmtestGeocodingComponent } from './agmtest-geocoding/agmtest-geocoding.component';
import { AgmtestReversegeocodingComponent } from './agmtest-reversegeocoding/agmtest-reversegeocoding.component'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonModule, ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { AppConfigVariables } from '../shared/appconfigvariables';

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
    //FormsModule,
    ReactiveFormsModule,
    DateInputsModule,
    InputsModule,
    ButtonModule,
    ButtonGroupModule,
    // AgmCoreModule,
    AgmCoreModule.forRoot({
      apiKey: AppConfigVariables.agmGoogleMapsApiKey(),
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
