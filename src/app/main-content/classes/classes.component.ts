import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css',
})
export class ClassesComponent {
  selectedClass: string | null = "tabs-1";
selectedDay: string|null= null;

  // Your schedule data and methods here

  // Function to set the selected class
  setSelectedClass(className: string) {
    this.selectedClass = className;
  }

  // Function to clear the selected class
  clearSelectedClass() {
    this.selectedClass = null;
  }
  showImage(tabId: string) {
    this.selectedClass = tabId;
  }
}
