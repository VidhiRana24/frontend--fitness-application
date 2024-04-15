import { Component, OnInit } from '@angular/core';

import jQuery from 'jquery';

@Component({
  selector: 'app-classes-details',
  templateUrl: './classes-details.component.html',
  styleUrls: ['./classes-details.component.css'],
})
export class ClassesDetailsComponent implements OnInit {
  joinZumba(): void {
    console.log('User joined Zumba class!');
    // Add your logic here for what happens when the user joins the Zumba class
  }

  images = ['cardio.jpg', 'cardio.jpg', 'cardio.jpg'];
  ngOnInit(): void {
    // Initialize the carousel
    (<any>jQuery)('#carouselExampleSlidesOnly').carousel();
  }
}
