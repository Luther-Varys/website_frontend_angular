import { Component, OnInit } from '@angular/core';

//Ngx spinner
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-test-ngxspinner',
  templateUrl: './test-ngxspinner.component.html',
  styleUrls: ['./test-ngxspinner.component.scss']
})
export class TestNgxspinnerComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }



  runNgxSpinner(){
        /** spinner starts on init */
        this.spinner.show();
 
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 5000);
  }


}
