import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css',
})
export class PackagesComponent implements OnInit {
  constructor(private router: Router) {}
  navigateToWorkoutPlan() {
    this.router.navigate(['/workoutplan']);
  }

  navigateToDetailPage() {
    this.router.navigate(['/detailpage']);
  }
  hasPlan: any
  ngOnInit(){
    this.hasPlan = localStorage.getItem("hasPlan");
  }
}
document.addEventListener('DOMContentLoaded', function (event: Event): void {
  var contentItems = document.querySelectorAll('.content');
  var descriptionItems = document.querySelectorAll('.description');

  function checkScroll(): void {
    contentItems.forEach(function (content, index) {
      var contentPosition = content.getBoundingClientRect().top;
      var windowHeight = window.innerHeight / 1.3; // Adjust the value to trigger the animation earlier or later

      if (contentPosition < windowHeight) {
        content.classList.add('animated', 'slideInLeft');
        setTimeout(function () {
          descriptionItems[index].classList.add('animated', 'slideInRight');
        }, 300); // Delay the description animation for a smoother effect
      }
    });
  }

  window.addEventListener('scroll', checkScroll);
  window.addEventListener('resize', checkScroll);
});
