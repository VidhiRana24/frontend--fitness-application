import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentModule } from './main-content.module';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ContactComponent } from './contact/contact.component';
import { ClassesComponent } from './classes/classes.component';
import { PackagesComponent } from './packages/packages.component';

import { GalleryComponent } from './gallery/gallery.component';
import { ClassesDetailsComponent } from './classes-details/classes-details.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'workout-plan', component: WorkoutPlanComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'classes-details', component: ClassesDetailsComponent },
  { path: 'gallery', component: GalleryComponent },
  {
    path: 'main-content',
    loadChildren: () =>
      import('./main-content.module').then((m) => m.MainContentModule),
  },
  // You can add more routes here as needed
];
@NgModule({
  imports: [CommonModule, MainContentModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContentRoutingModule {}
