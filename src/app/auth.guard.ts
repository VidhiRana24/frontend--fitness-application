import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isLoggedIn()) {
      return true;
    } else {
      // Redirect to login page if not logged in
      this.router.navigate(['/login']);
      return false;
    }
  }

  isLoggedIn(): boolean {
    // Implement your authentication logic here
    // For example, check if the user is logged in
    // Return true if logged in, false otherwise
    return localStorage.getItem('loggedIn') === 'true';
  }
}
