import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private _token: string = null;
  private _username: string = null;

  constructor() {
    console.log("User store service initilize");
   }

  set token(token: string) {
    this._token = token;
  }

  set username(username: string) {
    this._username = username;
  }

  get token() {
    return this._token;
  }

  get username() {
    return this._username;
  }

  isLoggedIn() {
    return this.token != null;
  }
}
