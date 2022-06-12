import { Component } from '@angular/core';
import { UserStoreService } from './services/user/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public userStoreService: UserStoreService) {
    this.userStoreService.username =  localStorage.getItem("userName");
    this.userStoreService.token =  localStorage.getItem("token");
    this.userStoreService.type =  Number(localStorage.getItem("type"));
  }

}
