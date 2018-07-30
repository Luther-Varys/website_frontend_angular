import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
    { path: 'another-page', loadChildren: '../another/another.module#AnotherModule' },
    { path: 'user-profile', loadChildren: '../profile/profile.module#ProfileModule' },
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
