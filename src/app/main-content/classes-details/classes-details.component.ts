import { Component } from '@angular/core';

@Component({
  selector: 'app-classes-details',
  templateUrl: './classes-details.component.html',
  styleUrl: './classes-details.component.css',
})
export class ClassesDetailsComponent {
  joinZumba(): void {
    // Add your logic here for what happens when the user joins the Zumba class
    console.log('User joined Zumba class!');
    // You can navigate to another route, show a modal, or perform any other action
  }

  images = [
    'cardio.jpg',
    'cardio.jpg',
    'cardio.jpg',
    'cardio.jpg',
    'cardio.jpg',
    'cardio.jpg',
    'cardio.jpg',
    'cardio.jpg',
  ];
}
