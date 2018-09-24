import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { ErrorComponent } from './error/error.component';



// Load all required data for the bg locale Configuration used by default in angular
// import { registerLocaleData } from '@angular/common';
// import localeDe from '@angular/common/locales/de';
// import localeEs from '@angular/common/locales/es';
// import localeFr from '@angular/common/locales/fr';
// import localeIt from '@angular/common/locales/it';
// import localeRu from '@angular/common/locales/ru';

//Set Locale & for tranlsation
// the second parameter 'fr' is optional
// registerLocaleData(localeDe, 'fr');
// registerLocaleData(localeEs, 'es');
// registerLocaleData(localeFr, 'fr');
// registerLocaleData(localeIt, 'it');
// registerLocaleData(localeRu, 'ru');




import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';
// import { ProfileComponent } from './profile/profile.component';

//******************** */
//KENDO
//******************** */
// Imports the Button module
import { ButtonModule } from '@progress/kendo-angular-buttons';
// Imports the ButtonGroup module
import { ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

// Load all required data for the bg locale Configuration used by default in KENDO TELERIK
//https://www.telerik.com/kendo-angular-ui/components/globalization/internationalization/loading-data/
import { IntlModule } from '@progress/kendo-angular-intl';
// Load the required calendar data for the de locale
import '@progress/kendo-angular-intl/locales/it/all';
import '@progress/kendo-angular-intl/locales/ru/all';
import { CrudDboApplicationUserService } from './shared/webapi/crud.autogen/autogen-crud-dbo.service';
// import { AgmCoreModule } from '@agm/core';
// import { GooglemapstestComponent } from './googlemapstest/googlemapstest.component';
// import { CrudDboApplicationUserComponent } from './crud-dbo-application-user/crud-dbo-application-user.component';


const APP_PROVIDERS = [
  AppConfig
];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    ErrorComponent,
    // GooglemapstestComponent
    // CrudDboApplicationUserComponent,
    // ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: false,
      preloadingStrategy: PreloadAllModules
    }),
    //Kendo
    ButtonModule, 
    ButtonGroupModule,
    GridModule,
    IntlModule,
    //AGM-angular google maps
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAeO7HeMKs0df444MtYfq5eAfsFWwN8s_Q'
    // })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' },
    AuthService,
    APP_PROVIDERS,
    DataStorageService,
    CrudDboApplicationUserService
  ]
})
export class AppModule {}
