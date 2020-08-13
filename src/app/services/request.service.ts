import { Recipe } from './../model/recipe.model';
import { EnvService } from './env.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  isLoggedIn = false;
  token: any;
  private recipes: Recipe[];
  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService
  ) { }

  login(email: string, password: string) {
    return this.http.post(this.env.API_URL + 'auth/login',
      { email, password }
    ).pipe(
      tap(
        token => {
          this.storage.setItem('token', token)
            .then(
              () => {
                console.log('BERJAYA!!');
              },
              error => console.error('Error login', error)
            );
          this.token = token;
          this.isLoggedIn = true;
          return token;
        }
      ),
    );
  }

  register(fName: string, lName: string, email: string, password: string) {
    return this.http.post(this.env.API_URL + 'auth/register',
      { fName, lName, email, password }
    );
  }

  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;

        if (this.token != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn = false;
      }
    );
  }

  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token['token_type'] + ' ' + this.token['access_token']
    });

    return this.http.get(this.env.API_URL + 'auth/logout', { headers })
    .pipe(
      tap(data => {
        this.storage.remove('token');
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    );
  }

  getAllRecipes() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"] + ' ' + this.token["access_token"]
    });

    return this.http.get<Recipe[]>(this.env.API_URL + 'recipe', { headers: headers })
    .pipe(
      tap(recipes => {
        console.log(recipes);
        this.recipes = recipes;
        return recipes;
      })
    );
  }

  getRecipe(recipeId: string) {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"] + ' ' + this.token["access_token"]
    });

    return this.http.get<Recipe>(this.env.API_URL + 'recipe/' + recipeId, { headers: headers })
    .pipe(
      tap(
        recipe => {
          return recipe;
        })
    );
  }
}
