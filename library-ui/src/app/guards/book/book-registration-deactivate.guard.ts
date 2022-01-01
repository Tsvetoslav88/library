import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookRegistrationComponent } from 'src/app/components/book/book-registration/book-registration.component';

@Injectable({
  providedIn: 'root'
})
export class BookRegistrationDeactivateGuard implements CanDeactivate<BookRegistrationComponent> {
  canDeactivate(
    component: BookRegistrationComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(component.bookform.dirty) {
        return window.confirm('You unsaved changes will be lost. Do you want to navigate away from this page?');
      }
    return true;

  }
  
}
