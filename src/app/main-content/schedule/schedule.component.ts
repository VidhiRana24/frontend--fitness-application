import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  selectedDay: string | null = null;

  schedule = [
    { name: 'Fitness Class', time: '10:00AM - 11:30AM', days: ['Monday'] },
    {
      name: 'Muscle Training',
      time: '10:00AM - 11:30AM',
      days: ['Thursday', 'Friday'],
    },
    {
      name: 'Body Building',
      time: '2:00PM - 3:30PM',
      days: ['Monday', 'Tuesday'],
    },
    {
      name: 'Yoga Training Class',
      time: '10:00AM - 11:30AM',
      days: ['Wednesday', 'Friday'],
    },
    {
      name: 'Advanced Training',
      time: '10:00AM - 11:30AM',
      days: ['Thursday', 'Wednesday'],
    },
    // Add more class objects as needed
  ];
  instructor = [
    { name: 'William G. Stewart', classes: ['Fitness Class'] },
    { name: 'Paul D. Newman', classes: ['Muscle Training'] },
    { name: 'Boyd C. Harris', classes: ['Body Building'] },
    { name: 'Hector T. Daigle', classes: ['Yoga Training Class'] },
    { name: 'Bret D. Bowers', classes: ['Advanced Training'] },
  ];
  // Function to set the selected day
  setSelectedDay(day: string) {
    this.selectedDay = day;
  }

  // Function to clear the selected day
  clearSelectedDay() {
    this.selectedDay = null;
  }
  getInstructorForClass(className: string): string {
    const instructor = this.instructor.find((instructor) =>
      instructor.classes.includes(className)
    );
    return instructor ? instructor.name : 'Instructor Not Found';
  }
}
