import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  @Input() selectedClass: string | null = null;
  @Input() selectedDay: string | null = null;

  schedule = [
    { name: 'Muscle Building', time: '10:00AM - 11:30AM', days: ['Monday'] , tab: "tabs-1"},
    { name: 'Yoga Classes', time: '10:00AM - 11:30AM', days: ['Thursday', 'Friday'], tab: "tabs-2" },
    { name: 'Cardio Workouts', time: '2:00PM - 3:30PM', days: ['Monday', 'Tuesday'], tab: "tabs-3" },
    { name: 'Zumba Classes', time: '10:00AM - 11:30AM', days: ['Wednesday', 'Friday'], tab: "tabs-4" },
 
    // Add more class objects as needed
  ];

  instructor = [
    { name: 'William G. Stewart', classes: ['Muscle Building'] },
    { name: 'Paul D. Newman', classes: ['Yoga Classes'] },
    { name: 'Boyd C. Harris', classes: ['Cardio Workouts'] },
    { name: 'Hector T. Daigle', classes: ['Zumba Classes'] },
    
    // Add more instructor objects as needed
  ];

  ngOnInit() {
    this.setSelectedDay('Monday');
  }

  setSelectedDay(day: string) {
    this.selectedDay = day;
  }

  setSelectedClass(className: string) {
    this.selectedClass = className;
  }

  getInstructorForClass(className: string): string {
    const instructorObj = this.instructor.find(instructor => instructor.classes.includes(className));
    return instructorObj ? instructorObj.name : 'Instructor Not Found';
  }

  // Custom filtering function to filter classes based on selected day and class
  filterClasses(): any[] {
    console.log(this.selectedClass)
    return this.schedule.filter(classItem =>
      (!this.selectedDay || classItem.days.includes(this.selectedDay)) &&
      (!this.selectedClass || classItem.tab === this.selectedClass)
    );
  }
  
}
