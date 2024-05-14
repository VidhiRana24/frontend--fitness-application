import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { WorkoutService } from '../../services/workout-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  showOverlay: boolean = true;
  userId!: string

  loginForm!: FormGroup;
  errorMessage: string = '';
  loginWithEmail() { }
  loginWithFacebook() { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userType: ['user', Validators.required], // Add userType form control with a default value
    });

    localStorage.clear()


  }
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    , private workoutService: WorkoutService
  ) { }

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
        (data: any) => {
          console.log(data);
          this.userId = data.userId;
          console.log(this.userId);

          if (data && data.status && data.token) {
            console.log('User logged in successfully');
            // Navigate to user page
            this.getUserWorkoutPlan(this.userId);

            // this.router.navigate(['/about']);
          } else {
            console.error('User login failed:', data.message);
            // Set error message for user
            this.errorMessage = 'Incorrect credentials';
          }
        },
        (error) => {
          console.error('User login failed:', error);
          // Set error message for user
          this.errorMessage = 'Error logging in';
        }
      );
    } else if (userType === 'trainer') {
      console.log('Logging in as trainer...');
      this.authService.loginTrainer(userDetails).subscribe(
        (data: any) => {
          console.log(data);
          this.userId = data.userId

          if (data && data.status && data.token) {
            this.workoutService.getUserWithWorkoutPlan(this.userId)
            console.log('Trainer logged in successfully');
            // Navigate to trainer management page
            this.router.navigate(['/trainer-manage']);
          } else {
            console.error('Trainer login failed:', data.message);
            // Set error message for trainer
            this.errorMessage = 'Incorrect credentials';
          }
        },
        (error) => {
          console.error('Trainer login failed:', error);
          // Set error message for trainer
          this.errorMessage = 'Error logging in';
        }
      );
      
    }
    
    
  }
  checkWorkoutPlanStatus(userId: string): void {
    this.workoutService.getWorkoutById(userId).subscribe(
      (hasWorkoutPlan) => {
        console.log("workout plan", hasWorkoutPlan);

        if (hasWorkoutPlan) {
          // Workout plan already exists, navigate to classes
          this.router.navigate(['/classes']);
        } else {
          // No workout plan exists, handle accordingly
          console.log('No workout plan exists');
        }
      },
      (error) => {
        console.error('Failed to check workout plan existence:', error);
        // Handle error
      }
    );
  }
  getUserWorkoutPlan(userId: string): void {
    this.workoutService.getUserWithWorkoutPlan(userId).subscribe(
      (workoutPlan) => {
        if (workoutPlan) {
          localStorage.setItem("hasPlan", "true")
          this.router.navigate(['/classes']);
        } else {
          console.log('No workout plan exists for the user');
          this.router.navigate(['/about']);
        }
      },
      (error) => {
        console.error('Failed to get user workout plan:', error);
        this.router.navigate(['/about']);
        // Handle error
      }
    );
  }

  login(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (response :any) => {
          // Store user information in local storage or shared service
          localStorage.setItem('userProfile', JSON.stringify(response.userProfile));
          localStorage.setItem('workoutPlan', JSON.stringify(response.workoutPlan));

          // Redirect to user profile page or dashboard
          this.router.navigate(['/user-profile']); // Adjust route as needed
        },
        (error:any) => {
          console.error('Login error:', error);
          // Handle login error
        }
      );
    }
  }

}
