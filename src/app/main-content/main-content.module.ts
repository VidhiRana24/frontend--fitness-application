import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule

// Import components
import { ScheduleComponent } from './schedule/schedule.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ContactComponent } from './contact/contact.component';
import { ClassesComponent } from './classes/classes.component';
import { PackagesComponent } from './packages/packages.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ClassesDetailsComponent } from './classes-details/classes-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WorkoutPlanComponent,
    ClassesComponent,
    ScheduleComponent,
    TrainersComponent,
    ContactComponent,
    PackagesComponent,
    GalleryComponent,
    ClassesDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule, // Import RouterModule here
  ],
  exports: [
    WorkoutPlanComponent,
    ClassesComponent,
    ScheduleComponent,
    TrainersComponent,
    ContactComponent,
    PackagesComponent,
  ],
})
export class MainContentModule {}
