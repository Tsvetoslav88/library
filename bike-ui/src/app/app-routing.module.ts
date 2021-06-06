import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BikeDetailsComponent } from './components/bike/bike-details/bike-details.component';
import { BikeListComponent } from './components/bike/bike-list/bike-list.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'bikes/list', 
    pathMatch: 'full'
  },
  {
    path: 'bikes/list',
    component: BikeListComponent
  },
  {
    path: 'bike/:id',
    component: BikeDetailsComponent
  },
  {
    path: 'admin/view/:id',
    component: ViewRegistrationComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
