import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbo-applicationuser-readall',
  templateUrl: './dbo-applicationuser-readall.component.html',
  styleUrls: ['./dbo-applicationuser-readall.component.scss']
})
export class DboApplicationuserReadallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  getAllVm(){
    console.log("zr clicked: getAllVm()");
  }


}
