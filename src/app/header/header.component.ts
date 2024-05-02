import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  [x: string]: any;
  toggleNavbar: any;

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
}
