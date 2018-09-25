

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { AuthService } from '../../../../auth/auth.service';
import { EntityTag_VMC } from '../../../bl/vm/crud.autogen/VmC';
import { EntityTag_VMU } from '../../../bl/vm/crud.autogen/VmU';
import { AppConfigVariables } from '../../../appconfigvariables';





@Injectable()
export class etn_EntityTagController {

  baseUrlBackend:string;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.baseUrlBackend = AppConfigVariables.baseUrlBackend();
  }


  public createEntityTag(vm: EntityTag_VMC){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/EntityTag/CreateEntityTag/';
   
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


  public readEntityTag(modId: string){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/EntityTag/ReadEntityTag/';
   
    const obser = this.httpClient.get(apiUrlPath, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
      });
      
    //   .subscribe(
    //   (resp:EntityTag_VMR) => {
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


  public updateEntityTag(vm: EntityTag_VMU){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/EntityTag/UpdateEntityTag/';
   
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



  public deleteEntityTag(modId: string){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/EntityTag/DeleteEntityTag/';
   
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

