import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { WorkoutInformation } from '../interfaces/WorkoutInformation';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private userWorkoutInfoSubject: BehaviorSubject<WorkoutInformation>;
  public userWorkoutInfo$: Observable<WorkoutInformation>;
  private apiUrl = '/api/workout'; // Replace this with your backend API URL

  constructor(private http: HttpClient) {
    this.userWorkoutInfoSubject = new BehaviorSubject<WorkoutInformation>({
      goal: '',
      fitnessLevel: '',
      gender: '',
      age: 0,
      height: 0,
      workoutFrequency: '',
      workoutLocation: '',
    });
    this.userWorkoutInfo$ = this.userWorkoutInfoSubject.asObservable();
  }

  // Method to update the user's workout information
  updateUserWorkoutInformation(workoutInfo: WorkoutInformation): void {
    this.userWorkoutInfoSubject.next(workoutInfo);
  }

  // Method to get the user's workout information
  getUserWorkoutInformation(): WorkoutInformation {
    return this.userWorkoutInfoSubject.value;
  }

  // Method to send workout information to the backend
  sendWorkoutInformation(workoutInfo: WorkoutInformation): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.apiUrl, workoutInfo, { headers });
  }
}
