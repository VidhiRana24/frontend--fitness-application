import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WorkoutInformation } from '../interfaces/WorkoutInformation';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private userWorkoutInfoSubject: BehaviorSubject<WorkoutInformation>;
  public userWorkoutInfo$: Observable<WorkoutInformation>;

  constructor() {
    // Initialize the BehaviorSubject with some default or initial value
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
}
