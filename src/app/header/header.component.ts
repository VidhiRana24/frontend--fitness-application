import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  toggleNavbar: any;
constructor(public authService : AuthService){}
  toggle() {}
  isLoggedIn: boolean = false;

  // Method to handle user login
  loginUser() {
    // Perform login logic, such as setting isLoggedIn to true
    this.isLoggedIn = true;
  }

  // Method to handle user logout
  logoutUser() {
    // Perform logout logic, such as setting isLoggedIn to false
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
    // Subscribe to changes in authentication state
    this.authService.isLoggedIn().subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
      // If the user or trainer is logged in, get the username
      if (isLoggedIn) {
        this['username'] = this.authService.getUsername();
      } else {
        this['username'] = '';
      }
    });
  }
logout(): void {
  // Clear the authentication token or any other relevant data
  localStorage.removeItem('authToken');
  
  // Navigate to the login page or any other appropriate page
  // Navigate to the login page or any other appropriate page
  this['router'].navigate(['/login']);
}
}
