import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  // Method to get all workouts
  getAllWorkouts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/workouts`);
  }

  // Method to create a workout plan
  createWorkoutPlan(workoutData: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/workoutplan/create`,
      workoutData
    );
  }

  // Method to update a workout by its ID
  updateWorkoutById(workoutId: string, updatedData: any): Observable<any> {
    return this.http.patch<any>(
      `${this.baseUrl}/workoutplan/${workoutId}`,
      updatedData
    );
  }

  // Method to delete a workout by its ID
  deleteWorkoutById(workoutId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/workoutplan/${workoutId}`);
  }

  // Method to get a workout by its ID
  getWorkoutById(workoutId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/workouts/${workoutId}`);
  }
}
