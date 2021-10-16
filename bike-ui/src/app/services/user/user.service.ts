import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserStoreService } from './user-store.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private userStore: UserStoreService) {}

  login(username: string, password: string): Observable<any> {
    
    return this.http.post('/server/api/v1/user/login', {
      username: username,
      password: password
    }).pipe(map((resp: any) => {
      this.userStore.token = resp.token;
      this.userStore.username = username;
      this.userStore.type = resp.type;
      return resp;
    }));
    // this.userStore.token = "";
    // this.userStore.username = username;
  }


  register(username: string, password: string): Observable<any> {
    return this.http.post('/server/api/v1/user/register', {
      username: username,
      password: password
    }).pipe(map((resp: any) => {
      this.userStore.token = resp.token;
      this.userStore.username = username;
      return resp;
    }));
  }
}