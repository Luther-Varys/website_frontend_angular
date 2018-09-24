import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

// import {} from @types/googlepmaps;

import { } from '@types/googlemaps';

//declare var google: any;

@Component({
  selector: 'app-agmtest-geocoding',
  templateUrl: './agmtest-geocoding.component.html',
  styleUrls: ['./agmtest-geocoding.component.scss']
})
export class AgmtestGeocodingComponent implements OnInit {

  //Example of google maps for geo location
  //https://stackoverflow.com/questions/50472526/angular-5-autocomplete-geolocation-npm-install-not-working

  // agmMap: AgmMap;

  // public latitude: number = 51.678418;
  // public longitude: number = 7.809007;
  // public fillInAddress: '';
  // public searchControl: FormControl;
  // public zoom: number = 1;
  // public f_addr: string;
  // public city: string;
  // public country: string;
  // public scountry: string;
  // public postCode: string;
  // public estab: string;
  // public state: string;
  // @ViewChild('search' ) public searchElement: ElementRef;



  address_components: any = "heelo world";

  @ViewChild('autoSearch') public searchElement: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader  , private ngZone : NgZone ) {
    // this.agmMap = new AgmMap();

    // console.log("****ZR google****: ", google);
   }

  ngOnInit() {

    
      this.mapsAPILoader.load().then(
        () => {        
          let autocomplete = new 
          google.maps.places.Autocomplete(this.searchElement.nativeElement, 
          {types:["address"]});
 
         autocomplete.addListener("place_changed", ()=> {
           this.ngZone.run(()=>{
             let place: google.maps.places.PlaceResult = autocomplete.getPlace();

             this.address_components = place.address_components;
             console.log("ZR PLACE from googlemap: ", place);

             if(place.geometry === undefined || place.geometry === null) {
               return;
             }
          })
        })
      }      
     );      
   



    
    // //set google maps defaults
    // this.zoom = 4;
    // this.latitude = 39.8282;
    // this.longitude = -98.5795;
    
    // //create search FormControl
    // this.searchControl = new FormControl();
    
    // //set current position
    // this.setCurrentPosition();


    // //load Places Autocomplete
    // this.mapsAPILoader.load().then(() => {
    //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //     types: ["address"]
    //   });
    //   autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //       //get the place result
    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
    //       //verify result
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }
          
    //       //set latitude, longitude and zoom
    //       this.latitude = place.geometry.location.lat();
    //       this.longitude = place.geometry.location.lng();
    //       this.zoom = 12;
    //     });
    //   });
    // });



  }


  // private setCurrentPosition() {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 12;
  //     });
  //   }
  // }

  // getAddress() {
  //   this.gMapsService.getLatLan('Andorra')
  //     .subscribe(
  //       result => {
  //           this.__zone.run(() => {
  //               this.lat = result.lat();
  //               this.lng = result.lng();
  //           })
  //       },
  //       error => console.log(error),
  //       () => console.log('Geocoding completed!')
  //     );
  // }


  // private setCurrentPosition() {
	// 	if ("geolocation" in navigator) {
	// 		navigator.geolocation.getCurrentPosition((position) => {
	// 			this.latitude = position.coords.latitude;
	// 			this.longitude = position.coords.longitude;
	// 			this.zoom = 12;
	// 		});



	// 	}
  // }






}
