import {
  Component,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  submitted: boolean = false;
  initialImageUrl: string =
    'https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-user-2344772021';

  constructor(public fb: FormBuilder, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Implement initialization logic here
    // For example, you can set default form values or initialize other properties.
  }

  registrationForm = this.fb.group({
    file: [null as string | null],
  });

  @ViewChild('fileInput')
  el!: ElementRef;
  imageUrl: string | null = null;
  editFile: boolean = true;
  removeUpload: boolean = false;

  uploadFile(event: Event) {
    const reader = new FileReader();
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUrl = reader.result as string;
        this.registrationForm.patchValue({
          file: reader.result as string,
        });
        this.editFile = false;
        this.removeUpload = true;
      };

      this.cd.markForCheck();
    } else {
      // Set the image URL to the initial image if no file is uploaded
      this.imageUrl = this.initialImageUrl;
    }
  }

  removeUploadedFile() {
    this.imageUrl = null; // Set imageUrl to null to clear the uploaded image
    this.editFile = true;
    this.removeUpload = false;
    this.registrationForm.patchValue({
      file: null,
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.registrationForm.valid) {
      alert('Please fill all the required fields to create a super hero!');
    } else {
      console.log(this.registrationForm.value);
    }
  }
  saveProfile() {
    // Logic to save the profile (send data to backend, update database, etc.)
    // For demonstration purposes, let's just display an alert
    alert('Profile updated successfully!');
  }
}