

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { AuthService } from '../../../../auth/auth.service';
import { Poll_VMC } from '../../../bl/vm/crud.autogen/VmC';
import { Poll_VMU } from '../../../bl/vm/crud.autogen/VmU';
import { AppConfigVariables } from '../../../appconfigvariables';





@Injectable()
export class pol_PollController {

  baseUrlBackend:string;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.baseUrlBackend = AppConfigVariables.baseUrlBackend();
  }


  public createPoll(vm: Poll_VMC){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/Poll/CreatePoll/';
   
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


  public readPoll(modId: string){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/Poll/ReadPoll/';
   
    const obser = this.httpClient.get(apiUrlPath, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
      });
      
    //   .subscribe(
    //   (resp:Poll_VMR) => {
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


  public updatePoll(vm: Poll_VMU){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/Poll/UpdatePoll/';
   
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



  public deletePoll(modId: string){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/Poll/DeletePoll/';
   
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

