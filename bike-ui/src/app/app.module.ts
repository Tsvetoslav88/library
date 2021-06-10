import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { BikeListComponent } from './components/bike/bike-list/bike-list.component';
import { BikeDetailsComponent } from './components/bike/bike-details/bike-details.component';
import { BikeRegistrationComponent } from './components/bike/bike-registration/bike-registration.component';
import { BikeService } from './services/bike/bike.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    BikeListComponent,
    BikeDetailsComponent,
    BikeRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
