import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private _token: string = null;
  private _username: string = null;
  private _type: number = null;

  constructor() {
    console.log("User store service initilize");
   }

  set token(token: string) {
    this._token = token;
  }

  set username(username: string) {
    this._username = username;
  }

  set type(type: number) {
    this._type = type;
  }

  get token() {
    return this._token;
  }

  get username() {
    return this._username;
  }

  get type() {
    return this._type;
  }

  isLoggedIn() {
    return this.token != null;
  }
}
