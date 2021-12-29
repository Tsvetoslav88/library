import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/services/common/notification.service';
import { UserStoreService } from 'src/app/services/user/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class BikeRegistrationGuard implements CanActivate {

  constructor(public userStoreSerivce: UserStoreService,
    private router: Router,
    private  notificationService: NotificationService) {
    
  }

  canActivate(): boolean {
    console.log('BikeRegistrationGuard#canActivate called');
    if(this.userStoreSerivce.type == 1) {
      return true;
    }
    console.log('AuthGuard#canActivate not authorized to access page');
    this.router.navigate(['/bikes/list']);
    this.notificationService.showError("You are not authorized to access this page!");
    return false;
  }
  
}
