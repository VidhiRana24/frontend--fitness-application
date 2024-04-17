import { Component, OnInit } from '@angular/core'; // Import OnInit interface
import { WorkoutInformation } from '../interfaces/WorkoutInformation';
import { WorkoutService } from '../services/workout-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'], // Corrected from styleUrl to styleUrls
})
export class UserProfileComponent implements OnInit {
  isChecked: boolean = false;
  showSection(arg0: string) {
    throw new Error('Method not implemented.');
  }
  // Implement OnInit interface
  userWorkoutInfo!: WorkoutInformation;
  selectedSection: any;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    // Fetch the user's workout information from the service
    this.userWorkoutInfo = this.workoutService.getUserWorkoutInformation();
  }
}
