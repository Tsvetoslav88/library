import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/home/admin.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewRegistrationComponent } from './components/admin/view-registration/view-registration.component';
import { BikeListComponent } from './components/bike/bike-list/bike-list.component';
import { BikeDetailsComponent } from './components/bike/bike-details/bike-details.component';
import { BikeRegistrationComponent } from './components/bike/bike-registration/bike-registration.component';
import { BikeService } from './services/bike/bike.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { UserService } from './services/user/user.service';
import { UserStoreService } from './services/user/user-store.service';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { BikeManagementComponent } from './components/admin/bike-management/bike-management.component';
import { BikeRegistrationGuard } from './guards/bike/bike-registration.guard';
import { BikeRegistrationDeactivateGuard } from './guards/bike/bike-registration-deactivate.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/common/notification.service';
import { NavbarComponent } from './components/nav/navbar.component';
import { BikeResolver } from './resolvers/bike/bike-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    BikeListComponent,
    BikeDetailsComponent,
    BikeRegistrationComponent,
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
    BikeService, 
    BikeResolver,
    UserService, 
    UserStoreService,
    BikeRegistrationGuard,
    BikeRegistrationDeactivateGuard,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
