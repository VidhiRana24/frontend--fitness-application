import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/error/password-match.directive';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ErrorComponent } from '../../shared/error/error.component';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css',
})
export class RegComponent implements OnInit {
  [x: string]: any;
  showOverlay: boolean = true;
  usernamePattern = '/^[A-Za-Z]+(?: [a-zA-Z]+)*$/';
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        fullName: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[A-Za-z]+(?: [A-Za-z]+)*$/),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: passwordMatchValidator,
      }
    );
  }
  get fullName() {
    return this.registerForm.controls['fullName'];
  }
  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }
  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  onRegister() {
    const userDetails = this.registerForm.value;
    this.authService.registerUser(userDetails).subscribe(
      () => {
        // Navigate to home page after successful login
        this.router.navigate(['/login']);
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
