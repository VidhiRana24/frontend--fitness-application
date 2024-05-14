import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {

  private baseUrl = 'http://localhost:3002';

  constructor(private http: HttpClient) {}

  private getAccessToken(): string | null {
    return localStorage.getItem('token');
  }

  private getHeaders(): HttpHeaders {
    const token = this.getAccessToken() ?? ''; // Use empty string as default if token is null
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('access_token', token);
  }

  // Method to get all workouts
  getAllWorkouts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/workouts`, { headers: this.getHeaders() });
  }

  // Method to create a workout plan
  createWorkoutPlan(workoutData: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token')); // Include the token in the Authorization header

    return this.http.post<any>(
      `${this.baseUrl}/workoutplan/create`,
      workoutData,
      { headers: headers }
    ).pipe(
      tap(() => {
        localStorage.setItem('hasWorkoutPlan', 'true'); // Set hasWorkoutPlan flag to true after successful creation
      }),
      
      catchError(error => {
        // Handle error
        return throwError(error);
      })
    );
  }
  getUserWithWorkoutPlan(userId: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token')); // Include the token in the Authorization header

    return this.http.get<any>(
      `${this.baseUrl}/user/${userId}/workoutplan`, // Assuming this endpoint returns user details along with workout plan
      { headers: headers }
    ).pipe(
      catchError(error => {
        // Handle error
        return throwError(error);
      })
    );
  }

  // Method to update a workout by its ID
  updateWorkoutById(workoutId: string, updatedData: any): Observable<any> {
    return this.http.patch<any>(
      `${this.baseUrl}/workoutplan/${workoutId}`,
      updatedData,
      { headers: this.getHeaders() }
    );
  }

  // Method to delete a workout by its ID
  deleteWorkoutById(workoutId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/workoutplan/${workoutId}`, {
      headers: this.getHeaders(),
    });
  }

  // Method to get a workout by its ID
  getWorkoutById(workoutId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/workoutplan/${workoutId}`, {
      headers: this.getHeaders(),
    });
  }

  doesWorkoutPlanExist(userId: string): Observable<boolean> {
    // Assuming you store workout plan status in local storage
    const hasWorkoutPlan = localStorage.getItem(`hasWorkoutPlan_${userId}`) === 'true';
    return of(hasWorkoutPlan);
  }
}
