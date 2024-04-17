import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { PackagesComponent } from './main-content/packages/packages.component';
import { ClassesComponent } from './main-content/classes/classes.component';
import { ScheduleComponent } from './main-content/schedule/schedule.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { TrainersComponent } from './main-content/trainers/trainers.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { RegComponent } from './components/reg/reg.component';
import { WorkoutPlanComponent } from './main-content/workout-plan/workout-plan.component';

import { GalleryComponent } from './main-content/gallery/gallery.component';
import { ClassesDetailsComponent } from './main-content/classes-details/classes-details.component';
import { MainContentRoutingModule } from './main-content/main-content-routing.module';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PaymentComponent } from './payment/payment.component';
import { PackagesDetailComponent } from './main-content/packages-detail/packages-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegComponent },
  { path: 'dashboard', component: UsersDashboardComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: PackagesComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'trainer', component: TrainersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'workoutplan', component: WorkoutPlanComponent },
  { path: 'classes-details', component: ClassesDetailsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'packagesDetail', component: PackagesDetailComponent },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NoPageFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainContentRoutingModule, // Import MainContentRoutingModule here
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
