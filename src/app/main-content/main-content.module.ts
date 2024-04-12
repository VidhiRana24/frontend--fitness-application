import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ContactComponent } from './contact/contact.component';
import { ClassesComponent } from './classes/classes.component';
import { PackagesComponent } from './packages/packages.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ScheduleComponent,
    TrainersComponent,
    ContactComponent,
    ClassesComponent,
    PackagesComponent,
    WorkoutPlanComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    ScheduleComponent,
    TrainersComponent,
    ContactComponent,
    ClassesComponent,
    PackagesComponent,
    WorkoutPlanComponent,
  ],
})
export class MainContentModule {}
