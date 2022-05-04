import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserStoreService } from './user-store.service';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private userStore: UserStoreService) {}

  login(username: string, password: string): Observable<any> {
    
    // return this.http.get<Book[]>(`${this.baseUrl}api/v1/books`);

    return this.http.post(`${this.baseUrl}api/v1/user/login`, {
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
    return this.http.post(`${this.baseUrl}api/v1/user/register`, {
      username: username,
      password: password
    }).pipe(map((resp: any) => {
      this.userStore.token = resp.token;
      this.userStore.username = username;
      return resp;
    }));
  }
}