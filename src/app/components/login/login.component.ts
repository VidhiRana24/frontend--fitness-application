import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { error } from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  showOverlay: boolean = true;

  loginForm!: FormGroup;
  loginWithEmail() {}
  loginWithFacebook() {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userType: ['user', Validators.required], // Add userType form control with a default value
    });
  }
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
    const userType = userDetails.userType;

    if (userType === 'user') {
      console.log('Logging in as user...');
      this.authService.loginUser(userDetails).subscribe(
        () => {
          console.log('User logged in successfully');
          this.router.navigate(['/about']);
        },
        (error) => {
          console.error('User login failed:', error);
        }
      );
    } else if (userType === 'trainer') {
      console.log('Logging in as trainer...');
      this.authService.loginTrainer(userDetails).subscribe(
        () => {
          console.log('Trainer logged in successfully');
          this.router.navigate(['/trainer-manage']);
        },
        (error) => {
          console.error('Trainer login failed:', error);
        }
      );
    }
  }
}
