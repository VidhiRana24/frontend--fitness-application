import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ContactComponent } from './contact/contact.component';
import { ClassesComponent } from './classes/classes.component';
import { PackagesComponent } from './packages/packages.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    TrainersComponent,
    ContactComponent,
    ClassesComponent,
    PackagesComponent,
  ],
  imports: [CommonModule],
  exports: [
    ScheduleComponent,
    TrainersComponent,
    ContactComponent,
    ClassesComponent,
    PackagesComponent,
  ],
})
export class MainContentModule {}
