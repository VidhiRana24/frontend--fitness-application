import { SelectorListContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkoutService } from '../../services/workout-service.service';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.component.html',
  styleUrls: ['./workout-plan.component.css'],
})
export class WorkoutPlanComponent implements OnInit {
  goalForm!:NgForm  
  progressValue: number = 0;
  selectedGoal: any;
  selectedLevel: any;
  selectedGender: any;
  selectedAge!: string;
  selectedHeightFeet!: string;
  selectedWeight!: string;
  selectedWorkoutLocation: { title: string; description: string } | undefined;
  currentSection: number = 1;
  totalSections: number = 7;
  selectedWorkoutFrequency: string | number | undefined;

  workoutFrequencies: { value: number | string; label: string }[] = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: '7+', label: '7+' },
  ];
  constructor(private router: Router, private workoutService: WorkoutService) {}

  goals: any[] = [
    {
      title: 'General Fitness',
      description: 'Staying healthy and having good cardiovascular health',
    },
    {
      title: 'Bulking',
      description: 'Focus on increasing muscle mass and strength',
    },
    {
      title: 'Cutting',
      description: 'Emphasizing calorie burn and creating a caloric deficit',
    },
  ];

  fitnessLevels: any[] = [
    {
      value: 'beginner',
      title: 'Beginner',
      description: 'New to lifting weights and unfamiliar with most exercises',
    },
    {
      value: 'intermediate',
      title: 'Intermediate',
      description: 'Familiar with most exercises and comfortable working out',
    },
    {
      value: 'advanced',
      title: 'Advanced',
      description:
        'Experienced with training and will often help out friends who are starting out',
    },
  ];

  genders: any[] = [
    { value: 'male', title: 'Male', description: 'Male description here' },
    {
      value: 'female',
      title: 'Female',
      description: 'Female description here',
    },
    // Add more genders if needed
  ];
  workoutLocations: { title: string; description: string }[] = [
    { title: 'Gym', description: 'With strength training equipment' },
    { title: 'Home', description: 'With minimal heavy equipment' },
  ];
  progressColor: any;

  selectGoal(goal: any) {
    this.selectedGoal = goal;
    this.updateProgress();
  }

  selectLevel(level: any) {
    this.selectedLevel = level;
    this.updateProgress();
  }

  selectGender(gender: any) {
    this.selectedGender = gender;
    this.updateProgress();
  }

  selectAge(age: string) {
    this.selectedAge = age;
    this.updateProgress();
  }

  selectHeight(heightFeet: string) {
    this.selectedHeightFeet = heightFeet;
    this.updateProgress();
  }

  selectWeight(weight: string) {
    this.selectedWeight = weight;
    this.updateProgress();
  }
  selectWorkoutFrequency(frequency: string | number) {
    this.selectedWorkoutFrequency = frequency;
    this.updateProgress();
  }

  selectWorkoutLocation(location: { title: string; description: string }) {
    this.selectedWorkoutLocation = location;
    this.updateProgress();
  }

  updateProgress() {
    let progressFactors = 0;
    if (this.selectedGoal) progressFactors++;
    if (this.selectedLevel) progressFactors++;
    if (this.selectedGender) progressFactors++;
    if (this.selectedAge) progressFactors++;
    if (this.selectedHeightFeet && this.selectedWeight) progressFactors += 2;
    if (this.selectedWorkoutLocation) progressFactors++;
    if (this.selectedWorkoutFrequency) progressFactors++; // Increment when selectedWorkoutFrequency is set
    this.progressValue = (progressFactors / 9) * 100; // Update denominator to include the new factor
  }

  onSubmit(form: NgForm) {
    if (
      this.selectedGoal &&
      this.selectedLevel &&
      this.selectedGender &&
      this.selectedAge &&
      this.selectedHeightFeet &&
      this.selectedWeight &&
      this.selectedWorkoutFrequency
    ) {
      this.progressValue = 100;
    }
  }
  nextSection() {
    if (this.currentSection < this.totalSections) {
      setTimeout(() => {
        this.currentSection++;
      }, 1000);
    }
  }
  previousSection() {
    if (this.currentSection > 1) {
      this.currentSection--;
    }
  }

  onSubmit1(form: NgForm) {
    const workoutData = {
      fitnessGoals: this.selectedGoal.title,
      fitnessLevel: this.selectedLevel.value,
      gender: this.selectedGender.value,
      age: parseInt(this.selectedAge),
      height: this.selectedHeightFeet, 
      weight: parseInt(this.selectedWeight),
      workoutFrequency: this.selectedWorkoutFrequency,
      workoutLocation: this.selectedWorkoutLocation?.title,
    };
  
    this.workoutService.createWorkoutPlan(workoutData).subscribe(
      (response) => {
        console.log('Workout plan created successfully:', response);
       
        this.router.navigate(['/classes']);
      },
      (error) => {
        console.error('Failed to create workout plan:', error);

      }
    );
    this.router.navigate(['/classes']);
  }
  ngOnInit(): void {
    // Assuming you have userId stored somewhere
    const userId = 'your_user_id_here'; // Replace 'your_user_id_here' with actual userId
    
    this.checkWorkoutPlanStatus(userId);
  }

  checkWorkoutPlanStatus(userId: string): void {
    this.workoutService.doesWorkoutPlanExist(userId).subscribe(
      (hasWorkoutPlan: boolean) => {
        if (hasWorkoutPlan) {
          console.log(hasWorkoutPlan);
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
}
