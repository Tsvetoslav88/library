import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string = '';
  public password: string = '';

  public errorMessage : string = '';
  constructor(private userService: UserService,
              private router: Router) { }

  login() {
    this.userService.login(this.username, this.password)
      .subscribe((resp) => {
        console.log('Successfully logged in');
        // this.message = resp.msg;
        this.errorMessage  = '';
        this.router.navigate(['bikes','list'], /*{queryParams: {page: 1}}*/);
      }, (err) => {
        console.error('Error logging in', err);
        console.error('Error logging in', err.error.message);
        this.errorMessage  = err.error.message;
      });

      // this.router.navigate(['bikes','list']);
  }
}
