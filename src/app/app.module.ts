import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { ErrorComponent } from './error/error.component';

import { AuthService } from './auth/auth.service';
// import { ProfileComponent } from './profile/profile.component';

const APP_PROVIDERS = [
  AppConfig
];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    ErrorComponent,
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
    })
  ],
  providers: [
    AuthService,
    APP_PROVIDERS
  ]
})
export class AppModule {}
