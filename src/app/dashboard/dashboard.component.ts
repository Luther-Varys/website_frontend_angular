import { LOCALE_ID, Component, Inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.template.html'
})
export class DashboardComponent {

  // @Inject(LOCALE_ID) public mylocale: string
  dateTime = new Date();
  // mylocale = LOCALE_ID;

  constructor(@Inject(LOCALE_ID) public mylocale: string, public auth: AuthService) { }

}
