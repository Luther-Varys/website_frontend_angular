import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { AuthService } from '../../../auth/auth.service';
import { ApplicationUser_VMC } from '../../bl/vm/crud.autogen/VmC';
import { ApplicationUser_VMU } from '../../bl/vm/crud.autogen/VmU';
import { AppConfigVariables } from '../../appconfigvariables';







@Injectable()
export class CrudDboApplicationUserService {
  
  baseUrlBackend:string;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.baseUrlBackend = AppConfigVariables.baseUrlBackend();
  }


  public createApplicationUser(vm: ApplicationUser_VMC){
    const apiUrlPath = this.baseUrlBackend+"api/CrudModel/ApplicationUser/CreateApplicationUser/";
   
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


  public readApplicationUser(modId: string){
    const apiUrlPath = this.baseUrlBackend+"api/CrudModel/ApplicationUser/ReadApplicationUser/";
   
    const obser = this.httpClient.get(apiUrlPath, {
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


  public updateApplicationUser(vm: ApplicationUser_VMU){
    const apiUrlPath = this.baseUrlBackend+"api/CrudModel/ApplicationUser/UpdateApplicationUser/";
   
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



  public deleteApplicationUser(modId: string){
    const apiUrlPath = this.baseUrlBackend+"api/CrudModel/ApplicationUser/DeleteApplicationUser/";
   
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




