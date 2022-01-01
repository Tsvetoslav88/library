import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/home/admin.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewRegistrationComponent } from './components/admin/view-registration/view-registration.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { BookRegistrationComponent } from './components/book/book-registration/book-registration.component';
import { BookService } from './services/book/book.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { UserService } from './services/user/user.service';
import { UserStoreService } from './services/user/user-store.service';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { BikeManagementComponent } from './components/admin/bike-management/bike-management.component';
import { BookRegistrationGuard } from './guards/book/book-registration.guard';
import { BookRegistrationDeactivateGuard } from './guards/book/book-registration-deactivate.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/common/notification.service';
import { NavbarComponent } from './components/nav/navbar.component';
import { BookResolver } from './resolvers/book/book-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    BookListComponent,
    BookDetailsComponent,
    BookRegistrationComponent,
    LoginComponent,
    RegisterComponent,
    BikeManagementComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [
    BookService, 
    BookResolver,
    UserService, 
    UserStoreService,
    BookRegistrationGuard,
    BookRegistrationDeactivateGuard,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
