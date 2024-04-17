import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import jQuery from 'jquery';

@Component({
  selector: 'app-classes-details',
  templateUrl: './classes-details.component.html',
  styleUrls: ['./classes-details.component.css'],
})
export class ClassesDetailsComponent implements OnInit {
  constructor(private router: Router) {}
  // navigateToPackageDetail(packageId: number): void {
  //   // Assuming you have a route parameter for packageId
  //   // Navigate to the PackageDetail component with the packageId as a route parameter
  //   this.router.navigate(['/package-detail', packageId]);
  // }

  joinZumba(): void {
    console.log('User joined Zumba class!');
    this.router.navigate(['/packagesDetail']);
    // Add your logic here for what happens when the user joins the Zumba class
  }

  images = ['cardio.jpg', 'cardio.jpg', 'cardio.jpg'];
  ngOnInit(): void {
    // Initialize the carousel
    (<any>jQuery)('#carouselExampleSlidesOnly').carousel();
  }
}
//caruosel is not woring
