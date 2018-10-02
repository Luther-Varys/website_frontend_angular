import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-qrgenerator',
  templateUrl: './test-qrgenerator.component.html',
  styleUrls: ['./test-qrgenerator.component.scss']
})
export class TestQrgeneratorComponent implements OnInit {


  public myAngularxQrCode: string = null;

  constructor() { 
    this.myAngularxQrCode = 'Your QR code data string';
  }

  ngOnInit() {
  }

}
