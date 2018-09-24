import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
    { path: 'another-page', loadChildren: '../another/another.module#AnotherModule' },
    { path: 'another-page-form', loadChildren: '../anothertestform/anothertestform.module#AnothertestformModule' },
    { path: 'user-profile', loadChildren: '../profile/profile.module#ProfileModule' },
    { path: 'crud-autogen', loadChildren: '../crud-autogen/crud-autogen.module#CrudAutogenModule' },
    { path: 'ng-googlemaps', loadChildren: '../googlemapstest/googlemapstest.module#GooglemapstestModule' },
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
