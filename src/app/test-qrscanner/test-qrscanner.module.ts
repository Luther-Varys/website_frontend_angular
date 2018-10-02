import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QRCodeModule } from 'angularx-qrcode';
import { TestQrscannerComponent } from './test-qrscanner.component';
import { TestQrgeneratorComponent } from './test-qrgenerator/test-qrgenerator.component';


export const routes = [
  // { path: '', component: GooglemapstestComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'qrscanner', pathMatch: 'full' },
  { path: 'qrscanner', component: TestQrscannerComponent },
  { path: 'qrgenerator', component: TestQrgeneratorComponent },
  
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ZXingScannerModule,
    QRCodeModule
  ],
  declarations: [
    TestQrscannerComponent,
    TestQrgeneratorComponent
  ]
})
export class TestQrscannerModule { 
  static routes = routes;

}
