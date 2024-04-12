import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fitfusion';
  constructor(private router: Router) {}

  isLoginPage() {
    return this.router.url.includes('/login');
  }

  isRegisterPage() {
    return this.router.url.includes('/register');
  }

  isWorkoutPlan(): boolean {
    // Logic to determine if the current route is the workout plan page
    return this.router.url === '/workoutplan';
  }
}
