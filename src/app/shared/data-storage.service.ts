// import { Injectable } from '@angular/core';

// @Injectable()
// export class DataStorageService {

//   constructor() { }

// }



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

// import { RecipeService } from '../recipes/recipe.service';
// import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              // private recipeService: RecipeService,
              private authService: AuthService) {
  }



  pingDbPublic(){
    const path_1 = "http://localhost:49433/api/values";
    const path_2 = "http://localhost:3010/api/public";
    const path_3 = "http://localhost:51964/public";

    const res = this.httpClient.get(path_2).subscribe(
      (recipes:any) => {
        console.log(recipes);;
      }
    );;
    // console.log(res);
  }



  pingDbPrivate(){
    const path_1 = "http://localhost:49433/api/values";
    const path_2 = "http://localhost:3010/api/private";
    const path_3 = "http://localhost:51964/private";

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
    const path_1 = "http://localhost:49433/api/values";
    const path_2 = "http://localhost:3010/api/private-scoped";
    const path_3 = "http://localhost:51964/private-scoped";

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






  createPoll(){
    const path_2 = "http://localhost:3010/api/poll/createpoll";

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
