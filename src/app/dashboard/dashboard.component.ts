import { LOCALE_ID, Component, Inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { products } from './products';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.template.html'
})
export class DashboardComponent {

  title = 'Hello World!';

  // @Inject(LOCALE_ID) public mylocale: string
  dateTime = new Date();
  // mylocale = LOCALE_ID;


  //Kendo Grid data loading
  public gridData: any[] = products;

  constructor(@Inject(LOCALE_ID) public mylocale: string, public auth: AuthService) { }



  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
}
