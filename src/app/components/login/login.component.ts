import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  showOverlay: boolean = true;

  loginWithEmail() {}
  loginWithFacebook() {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }
  onLogin() {
    const userDetails = this.loginForm.value;
    this.authService.loginUser(userDetails).subscribe(
      () => {
        // Navigate to home page after successful login
        this.router.navigate(['/classes']);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );

    // Assuming login logic is implemented here
    // Once login is successful, hide the overlay
    this.showOverlay = false;
  }
}
