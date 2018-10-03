// import { Injectable } from '@angular/core';

// @Injectable()
// export class DataStorageService {

//   constructor() { }

// }



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
// import { Response } from '@angular/http';
import 'rxjs/Rx';

// import { RecipeService } from '../recipes/recipe.service';
// import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { CameCaseVmMapperHelper } from './Helper/CameCaseVmMapperHelper';
import { AppConfigVariables } from './appconfigvariables';






@Injectable()
export class DataStorageService {

  baseUrlBackend:string;

  cameCaseVmMapperHelper = new CameCaseVmMapperHelper();

  constructor(private httpClient: HttpClient, private authService: AuthService) {
                this.baseUrlBackend = AppConfigVariables.baseUrlBackend();
  }



  pingDbPublic(){
    // const path_1 = "http://localhost:49433/api/values";
    const path_2 = this.baseUrlBackend+"api/public";
    // const path_3 = "http://localhost:51964/public";

    const res = this.httpClient.get(path_2).subscribe(
      (recipes:any) => {
        console.log(recipes);;
      }
    );;
    // console.log(res);
  }



  pingDbPrivate(){
    // const path_1 = "http://localhost:49433/api/values";
    const path_2 = this.baseUrlBackend+"api/private";
    // const path_3 = "http://localhost:51964/private";

    const res = this.httpClient.get(path_2, {
      // headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
      }).subscribe(
      (recipes:any) => {
        console.log(recipes);
      },
      (error:any)=>{
        console.log(error);
      },
      ()=>{

      }
    );
    // console.log(res);
  }


  pingDbPrivateScoped(){
    const path_2 = this.baseUrlBackend+"api/private-scoped";

    const obser = this.httpClient.get(path_2, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
      }).subscribe(
      (resp:any) => {
        console.log(resp);
      },
      (error:any)=>{
        console.log(error);
      },
      ()=>{

      }
    );

    //return obser;
  }






  createPoll(){
    const path_2 = this.baseUrlBackend+"api/poll/createpoll";

    const res = this.httpClient.get(path_2, {
      // headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
      }).subscribe(
      (recipes:any) => {
        console.log(recipes);
      },
      (error:any)=>{
        console.log(error);
      },
      ()=>{

      }
    );
    // console.log(res);
  }




  createUser(detailFormVM: DetailFormVM){
    const path = this.baseUrlBackend+"api/testapi/createuser";

    // const obser = this.httpClient.post(path, detailFormVM, {
    //   headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`),
    //   }).subscribe(
    //   (resp:any) => {
    //     console.log(resp);
    //   },
    //   (error:any)=>{
    //     console.log(error);
    //   },
    //   ()=>{
    //   }
    // );

    const obser = this.httpClient.post(path, detailFormVM, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`),
      })



    return obser;
  }



  //AccountDetail
  accountDetail(/*detailFormVM: DetailFormVM*/){
    const path = this.baseUrlBackend+"api/testapi/accountDetail";

    // const obser = this.httpClient.post(path, detailFormVM, {
    //   headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`),
    //   }).subscribe(
    //   (resp:any) => {
    //     console.log(resp);
    //   },
    //   (error:any)=>{
    //     console.log(error);
    //   },
    //   ()=>{
    //   }
    // );

    const obser = this.httpClient.get<DetailFormVM>(path, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`),
      })
      .map((response) => <DetailFormVM>(this.cameCaseVmMapperHelper.objectKeysToCamel(response)));
      //.map((response: DetailFormVM) => console.log("ZR response: ", response) );
      // .map((response: DetailFormVM) => {return response;});
      // .map((response: DetailFormVM) => <DetailFormVM>response.json());
    
    // obser.subscribe();



    return obser;
  }





  //AccountDetail
  wysiwygPost(wysiwyg_content:string){
    const path = this.baseUrlBackend+"api/testapi/WysiwygPost";

    let wysiwygPostVM = {
      "wysiwyg_content": wysiwyg_content
    };


    //****POST A STRING */
    //https://stackoverflow.com/questions/47354807/how-to-post-a-string-in-the-body-of-a-post-request-with-angular-4-3-httpclient
    const obser = this.httpClient.post(path, wysiwygPostVM, {
      // const obser = this.httpClient.post(path, `{"wysiwyg_content":"${wysiwyg_content}"}`, {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
      }).set('Authorization', `Bearer ${localStorage.getItem('id_token')}`),
      });
      //.map((response) => <DetailFormVM>(this.cameCaseVmMapperHelper.objectKeysToCamel(response)));
      //.map((response: DetailFormVM) => console.log("ZR response: ", response) );
      // .map((response: DetailFormVM) => {return response;});
      // .map((response: DetailFormVM) => <DetailFormVM>response.json());
    
    // obser.subscribe();



    return obser;
  }










  // storeRecipes() {
  //   // const headers = new HttpHeaders().set('Authorization', 'Bearer afdklasflaldf');

  //   // return this.httpClient.put('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
  //   //   observe: 'body',
  //   //   params: new HttpParams().set('auth', token)
  //   //   // headers: headers
  //   // });
  //   const req = new HttpRequest('PUT', 'https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {reportProgress: true});
  //   return this.httpClient.request(req);
  // }

  // getRecipes() {
  //   // this.httpClient.get<Recipe[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json?auth=' + token)
  //   this.httpClient.get<Recipe[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', {
  //     observe: 'body',
  //     responseType: 'json'
  //   })
  //     .map(
  //       (recipes) => {
  //         console.log(recipes);
  //         for (let recipe of recipes) {
  //           if (!recipe['ingredients']) {
  //             recipe['ingredients'] = [];
  //           }
  //         }
  //         return recipes;
  //       }
  //     )
  //     .subscribe(
  //       (recipes: Recipe[]) => {
  //         this.recipeService.setRecipes(recipes);
  //       }
  //     );
  // }
}





export class DetailFormVM
{
    public profileDetailForm:ProfileDetailVM; 
    public city:string;
    public datebirth:string;
    public  height:number;
    public email:string

    constructor(){
      this.profileDetailForm = new ProfileDetailVM();
      this.city = undefined;
      this.datebirth = undefined;
      this.height = undefined;
      this.email = undefined;
    }

} 

export class ProfileDetailVM
{
    public firstName:string;
    public lastName:string;

    constructor(){
     this.firstName = undefined; 
     this.lastName = undefined; 
    }

}