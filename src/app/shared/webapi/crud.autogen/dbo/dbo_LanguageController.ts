

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { AuthService } from '../../../../auth/auth.service';
import { Language_VMC } from '../../../bl/vm/crud.autogen/VmC';
import { Language_VMU } from '../../../bl/vm/crud.autogen/VmU';
import { AppConfigVariables } from '../../../appconfigvariables';





@Injectable()
export class dbo_LanguageController {

  baseUrlBackend:string;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.baseUrlBackend = AppConfigVariables.baseUrlBackend();
  }


  public createLanguage(vm: Language_VMC){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/Language/CreateLanguage/';
   
    const obser = this.httpClient.post(apiUrlPath, vm, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
      });
      
      
    //   .subscribe(
    //   (resp:any) => {
    //     console.log(resp);
    //   },
    //   (error:any)=>{
    //     console.log(error);
    //   },
    //   ()=>{

    //   }
    // );


    return obser;
  }


  public readLanguage(modId: string){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/Language/ReadLanguage/';
   
    const obser = this.httpClient.get(apiUrlPath, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
      });
      
    //   .subscribe(
    //   (resp:Language_VMR) => {
    //     console.log(resp);
    //   },
    //   (error:any)=>{
    //     console.log(error);
    //   },
    //   ()=>{

    //   }
    // );


    return obser;
  }


  public updateLanguage(vm: Language_VMU){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/Language/UpdateLanguage/';
   
    const obser = this.httpClient.post(apiUrlPath, vm, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
      });
      
    //   .subscribe(
    //   (resp:any) => {
    //     console.log(resp);
    //   },
    //   (error:any)=>{
    //     console.log(error);
    //   },
    //   ()=>{

    //   }
    // );


    return obser;
  }



  public deleteLanguage(modId: string){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/Language/DeleteLanguage/';
   
    const obser = this.httpClient.post(apiUrlPath, modId, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
      });
      
    //   .subscribe(
    //   (resp:any) => {
    //     console.log(resp);
    //   },
    //   (error:any)=>{
    //     console.log(error);
    //   },
    //   ()=>{

    //   }
    // );

    return obser;
  }


}

