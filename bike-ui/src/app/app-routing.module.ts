import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/home/admin.component';
import { BikeDetailsComponent } from './components/bike/bike-details/bike-details.component';
import { BikeListComponent } from './components/bike/bike-list/bike-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ViewRegistrationComponent } from './components/admin/view-registration/view-registration.component';
import { BikeRegistrationComponent } from './components/bike/bike-registration/bike-registration.component';
import { BikeRegistrationGuard } from './guards/bike/bike-registration.guard';
import { BikeRegistrationDeactivateGuard } from './guards/bike/bike-registration-deactivate.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'bikes/list', component: BikeListComponent
  },
  {
    path: 'bike/registration', component: BikeRegistrationComponent, canActivate: [BikeRegistrationGuard], canDeactivate: [BikeRegistrationDeactivateGuard]
  },
  {
    path: 'bike/:id', component: BikeDetailsComponent
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
