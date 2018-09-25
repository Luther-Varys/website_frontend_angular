/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />

import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

//import {} from @types/googlepmaps;

//import { } from '@types/googlemaps';
// import {} from "googlemaps";
// import { } from 'googlemaps';
//import 'googlemaps';

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





  addressForm: FormGroup;
  address_components: any = "heelo world";

  @ViewChild('autoSearch') public searchElement: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    // this.agmMap = new AgmMap();

    // console.log("****ZR google****: ", google);
  }

  ngOnInit() {

    this.initForm();

    this.mapsAPILoader.load().then(
      () => {
        let autocomplete = new
          google.maps.places.Autocomplete(this.searchElement.nativeElement,
            { types: ["address"] });

        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();

            this.fillInAddress(place);

            this.address_components = place.address_components;
            console.log("ZR PLACE from googlemap: ", place);

            if (place.geometry === undefined || place.geometry === null) {
              return;
            }

            this.getLatLng(place);

          })
        })
      }
    );


  }

  onChosenAddressLocation(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }


  fillAddressForm(address_components: any){
    let streetaddress: string = "";
    let streetnumber: string = "";
    let city: string = "";
    let stateregion: string = "";
    let zipcode: string = "";
    let country: string = "";
  }
  




  initForm() {
    this.addressForm = new FormGroup({
      //street address
      "route": new FormControl(null, Validators.required),
      //street number
      "street_number": new FormControl(null, Validators.required),
      //city
      "locality": new FormControl(null, Validators.required),
      //State
      "administrative_area_level_1": new FormControl(null, Validators.required),
      //Zip Code
      "postal_code": new FormControl(null, Validators.required),
      //Country
      "country": new FormControl(null, Validators.required),
    });

    //Form and form controls observables can be enables to check if the form is valid or check the status
    this.addressForm.valueChanges.subscribe(
      (value) => console.log(value)
    );
    this.addressForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

  }

  // let placeSearch, autocomplete;
  // let componentForm = {
  //   street_number: 'short_name',
  //   route: 'long_name',
  //   locality: 'long_name',
  //   administrative_area_level_1: 'short_name',
  //   country: 'long_name',
  //   postal_code: 'short_name'
  // };

  // initAutocomplete() {
  //   // Create the autocomplete object, restricting the search to geographical
  //   // location types.
  //   autocomplete = new google.maps.places.Autocomplete(
  //       /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
  //       {types: ['geocode']});

  //   // When the user selects an address from the dropdown, populate the address
  //   // fields in the form.
  //   autocomplete.addListener('place_changed', fillInAddress);
  // }



  componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
  };

lat:number;
lng:number;

getLatLng(place: google.maps.places.PlaceResult){
  this.lat = place.geometry.location.lat();
  this.lng = place.geometry.location.lng();
}


  fillInAddress(place: google.maps.places.PlaceResult) {
    // Get the place details from the autocomplete object.
    // var place = autocomplete.getPlace();

    //Rest form
    this.resetValueOfForm();

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (this.componentForm[addressType]) {
        var val = place.address_components[i][this.componentForm[addressType]];
        this.addressForm.controls[addressType].setValue(val);
        // document.getElementById(addressType).value = val;
      }
    }
  }


  resetValueOfForm(){
    //When radio buttons are present they all get deselect, you must pay attention
    //to activate one radio button once the reset has been done.
    this.addressForm.reset();
  }



  onSubmitAddressForm() {

  }





}
