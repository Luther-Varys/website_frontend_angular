

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { AuthService } from '../../../../auth/auth.service';
import { EntityComment_VMC } from '../../../bl/vm/crud.autogen/VmC';
import { EntityComment_VMU } from '../../../bl/vm/crud.autogen/VmU';
import { AppConfigVariables } from '../../../appconfigvariables';





@Injectable()
export class etn_EntityCommentController {

  baseUrlBackend:string;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.baseUrlBackend = AppConfigVariables.baseUrlBackend();
  }


  public createEntityComment(vm: EntityComment_VMC){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/EntityComment/CreateEntityComment/';
   
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


  public readEntityComment(modId: string){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/EntityComment/ReadEntityComment/';
   
    const obser = this.httpClient.get(apiUrlPath, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
      });
      
    //   .subscribe(
    //   (resp:EntityComment_VMR) => {
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


  public updateEntityComment(vm: EntityComment_VMU){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/EntityComment/UpdateEntityComment/';
   
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



  public deleteEntityComment(modId: string){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/EntityComment/DeleteEntityComment/';
   
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

