import { Component, OnInit } from '@angular/core';
import { UserStoreService } from 'src/app/services/user/user-store.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userStoreSerivce: UserStoreService) { }
  title = 'bike-ui';
  ngOnInit(): void {
  }

}
