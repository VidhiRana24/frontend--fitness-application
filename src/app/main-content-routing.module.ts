import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './main-content/schedule/schedule.component';
import { TrainersComponent } from './main-content/trainers/trainers.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { ClassesComponent } from './main-content/classes/classes.component';
import { PackagesComponent } from './main-content/packages/packages.component';
import { WorkoutPlanComponent } from './main-content/workout-plan/workout-plan.component';

import { GalleryComponent } from './main-content/gallery/gallery.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'workout-plan', component: WorkoutPlanComponent },

  { path: 'gallery', component: GalleryComponent },
  // You can add more routes here as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContentRoutingModule {}
