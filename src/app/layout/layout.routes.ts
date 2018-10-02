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
    { path: 'test-qrcode', loadChildren: '../test-qrscanner/test-qrscanner.module#TestQrscannerModule' },
    { path: 'test-qrcode', loadChildren: '../test-qrscanner/test-qrscanner.module#TestQrscannerModule' },
    { path: 'test-sound', loadChildren: '../test-soundevent/test-soundevent.module#TestSoundeventModule' },
    { path: 'test-wysiwyg', loadChildren: '../test-wysiwyg/test-wysiwyg.module#TestWysiwygModule' },
    // { path: 'test-wysiwyg-frola', loadChildren: '../test-wysiwyg-frola/test-wysiwyg-frola.module#TestWysiwygFrolaModule' },
    // { path: 'test-wysiwyg-summernote', loadChildren: '../test-wysiwyg-summernote/test-wysiwyg-summernote.module#TestWysiwygSummernoteModule' },
    // { path: 'test-wysiwyg-quill', loadChildren: '../test-wysiwyg-quill/test-wysiwyg-quill.module#TestWysiwygQuillModule' },
    
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
