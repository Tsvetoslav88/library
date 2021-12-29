import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public username: string = '';
  public password: string = '';

  public errorMessage: string = '';
  constructor(private userService: UserService,
              private router: Router) { }

  register() {
    this.userService.register(this.username, this.password)
      .subscribe((resp) => {
        console.log('Successfully registered');
        // this.message = resp.msg;
        this.errorMessage = '';
        this.router.navigate(['bikes','list'], /*{queryParams: {page: 1}}*/);
      }, (err) => {
        console.error('Error register', err);
        console.error('Error register', err.error.message);
        this.errorMessage  = err.error.message;
      });
  }
  
}
