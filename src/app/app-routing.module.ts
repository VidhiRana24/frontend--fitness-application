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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: PackagesComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'trainer', component: TrainersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'workoutplan', component: WorkoutPlanComponent },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
