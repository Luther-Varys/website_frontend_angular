import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';

import { environment } from '../../environments/environment';

(window as any).global = window;

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: 'https://omniarete_webapi _net',//`https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: environment.auth0CallbackUrl,//AUTH_CONFIG.callbackURL,
    // redirectUri: AUTH_CONFIG.callbackURL,
    scope: "openid profile email email_verified"
  });


  userProfile:any;

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {



    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });  


    // try {
    
    // } catch (error) {
    //   console.log("ZR in AuthService.handleAuthentication(), error message: ", error) 
    // }

  }

  public getProfile(cb): void {



    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
}


  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {

    // if(this._areAuth0LocalStorageItemsPresent() == false)
    //   return false;

    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }







  // private _areAuth0LocalStorageItemsPresent(): boolean{
  //   if(this._isPresentAccessToken() == false || this._isPresentIdToken() == false || this._isPresentExpiration() == false)
  //     return false;
  //   return true;
  // }

  // private _isPresentAccessToken(): boolean{
  //   if (localStorage.getItem("access_token") === null)
  //     return true;
  //   return false;
  // }

  // private _isPresentIdToken(): boolean{
  //   if (localStorage.getItem("id_token") === null)
  //     return true;
  //   return false;
  // }

  // private _isPresentExpiration(): boolean{
  //   if (localStorage.getItem("expires_at") === null)
  //     return true;
  //   return false;
  // }


}
