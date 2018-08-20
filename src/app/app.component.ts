import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {


  public href: string = "";
  url: string = "asdf";

  constructor(public auth: AuthService, private router: Router) {
    auth.handleAuthentication();

    //Subcribe to router events
    //https://stackoverflow.com/questions/47101416/angular-how-to-globally-listen-to-router-events
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  //Subcribe to router events
  //https://stackoverflow.com/questions/47101416/angular-how-to-globally-listen-to-router-events
  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      // Do something...
      console.log("ZR-----NavigationStart...");
      this.href = this.router.url;
      console.log(this.router.url);
    }

    if (routerEvent instanceof NavigationEnd ) {
      // Do something...
      console.log("ZR-----NavigationEnd...");
      this.href = this.router.url;
      console.log(this.router.url);
      var pathArray = this.router.url.split( '/' );
      console.log("Path array: ", pathArray);

      let localeLangs: string[]  = ["it-it","en-us", "en-gb","ru-ru","es-es"];
      
      let pathLocaleLang:string = pathArray[1];
      console.log("pathLocaleLang: ", pathLocaleLang);

      let isPathPresent : boolean = false;
      isPathPresent = localeLangs.includes(pathLocaleLang);
      console.log("isPathPresent: ", isPathPresent);

    }

    if (routerEvent instanceof NavigationCancel ) {
      // Do something...
      console.log("ZR-----NavigationCancel...");
      this.href = this.router.url;
      console.log(this.router.url);
    }

    if (routerEvent instanceof NavigationError) {
      // Do something...
      console.log("ZR-----NavigationError...");
      this.href = this.router.url;
      console.log(this.router.url);
    }

    



  }



}
