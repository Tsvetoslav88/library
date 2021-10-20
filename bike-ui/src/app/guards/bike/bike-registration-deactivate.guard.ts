import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BikeRegistrationComponent } from 'src/app/components/bike/bike-registration/bike-registration.component';

@Injectable({
  providedIn: 'root'
})
export class BikeRegistrationDeactivateGuard implements CanDeactivate<BikeRegistrationComponent> {
  canDeactivate(
    component: BikeRegistrationComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return window.confirm('Do you want to navigate away from this page?');

  }
  
}
