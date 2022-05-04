import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/home/admin.component';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ViewRegistrationComponent } from './components/admin/view-registration/view-registration.component';
import { BookRegistrationComponent } from './components/book/book-registration/book-registration.component';
import { BookRegistrationGuard } from './guards/book/book-registration.guard';
import { BookRegistrationDeactivateGuard } from './guards/book/book-registration-deactivate.guard';
import { BookResolver } from './resolvers/book/book-resolver.service';

const routes: Routes = [
  {
    path: '', component: BookListComponent, resolve: {books: BookResolver}
  },
  {
    path: 'books/list', component: BookListComponent, resolve: {books: BookResolver}
  },
  {
    path: 'book/registration', component: BookRegistrationComponent, canActivate: [BookRegistrationGuard], canDeactivate: [BookRegistrationDeactivateGuard]
  },
  {
    path: 'book/:id', component: BookDetailsComponent
  },
  {
    path: 'admin/view/:id', component: ViewRegistrationComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
