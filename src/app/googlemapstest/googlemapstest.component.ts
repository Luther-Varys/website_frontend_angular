import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemapstest',
  templateUrl: './googlemapstest.component.html',
  styleUrls: ['./googlemapstest.component.scss']
})
export class GooglemapstestComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  circleRadius:number = 10000;

  constructor() { }

  ngOnInit() {
  }

}
