  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable, tap } from 'rxjs';
  import { Router } from '@angular/router';
  import { WorkoutService } from './workout-service.service';

  @Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    [x: string]: any;
    private baseUrl = 'http://localhost:3002'; // Your backend API base URL

    constructor(private http: HttpClient, private router: Router, private workoutService: WorkoutService) {}

    registerUser(userDetails: any): Observable<any> {
      alert('User Register Successfully');
      return this.http.post<any>(`${this.baseUrl}/user/create`, userDetails);
    }

    loginUser(userDetails: any): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/user/login`, userDetails).pipe(
        tap((response: { token: string, id: string }) => {
          if (response && response.token) {
           
            localStorage.setItem('token', response.token);
            // Extract user ID from response and pass it to the method
            const userId = response.id;
            // this.checkWorkoutPlanStatusAndNavigate(userId);
          }
        })
      );
    }
  
    private checkWorkoutPlanStatusAndNavigate(userId: string): void {
      this.workoutService.doesWorkoutPlanExist(userId).subscribe(
        (hasWorkoutPlan: boolean) => {
          if (hasWorkoutPlan) {
            // User has a workout plan, navigate to the classes
            this.router.navigate(['/classes']);
          } else {
            // User doesn't have a workout plan, navigate to the workout plan route
            this.router.navigate(['/workout-plan']);
          }
        },
        (error) => {
          console.error('Failed to check workout plan existence after login:', error);
          // Handle error
        }
      );
    }
    registerTrainer(trainerDetails: any): Observable<any> {
      alert('Trainer Register Successfully');
      return this.http.post<any>(
        `${this.baseUrl}/trainer/create`,
        trainerDetails
      );
    }

    loginTrainer(trainerDetails: any): Observable<any> {
      return this.http
        .post<any>(`${this.baseUrl}/trainer/login`, trainerDetails)
        .pipe(
          tap((response: { token: string }) => {
            if (response && response.token) {
              // console.log('Trainer Token:', response.token);
              localStorage.setItem('trainerToken', response.token);
            }
          })
        );
    }

    isLoggedIn(): any {
      const token = localStorage.getItem('token');
    
      return !!token;
    }

    login(email: string, password: string): Observable<any> {
      // Make HTTP request to your backend to authenticate user
      // Replace this.baseUrl with your API URL directly
      return this.http.post<any>(`${this.baseUrl}/login`, { email, password });
    }
    
    logout(): void {
      localStorage.removeItem('authToken');
      localStorage.removeItem('trainerAuthToken');
      this.router.navigate(['/login']);
    }

  
    isTrainerLoggedIn(): boolean {
      return !!localStorage.getItem('trainerToken');
    }
    getUsername(): string {
      // Placeholder logic to return the username
      if (this.isLoggedIn()) {
        return 'User Name';
      } else if (this.isTrainerLoggedIn()) {
        return 'Trainer Name';
      }
      return '';
    }
    saveProfileData(profileData: any): Observable<any> {
      // Assuming you have an API endpoint to save profile data
      const apiUrl = 'your-api-url/save-profile';
      return this.http.post(apiUrl, profileData);
    }
  }
