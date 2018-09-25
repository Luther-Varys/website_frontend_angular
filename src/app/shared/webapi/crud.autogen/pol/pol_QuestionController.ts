

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { AuthService } from '../../../../auth/auth.service';
import { Question_VMC } from '../../../bl/vm/crud.autogen/VmC';
import { Question_VMU } from '../../../bl/vm/crud.autogen/VmU';
import { AppConfigVariables } from '../../../appconfigvariables';





@Injectable()
export class pol_QuestionController {

  baseUrlBackend:string;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.baseUrlBackend = AppConfigVariables.baseUrlBackend();
  }


  public createQuestion(vm: Question_VMC){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/Question/CreateQuestion/';
   
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


  public readQuestion(modId: string){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/Question/ReadQuestion/';
   
    const obser = this.httpClient.get(apiUrlPath, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
      });
      
    //   .subscribe(
    //   (resp:Question_VMR) => {
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


  public updateQuestion(vm: Question_VMU){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/Question/UpdateQuestion/';
   
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



  public deleteQuestion(modId: string){
    const apiUrlPath = this.baseUrlBackend+'api/CrudModel/Question/DeleteQuestion/';
   
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

