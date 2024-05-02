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
  imageUrl: any =
    'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile: boolean = true;
  removeUpload: boolean = false;

  uploadFile(event: { target: { files: any[] } }) {
    const reader = new FileReader();
    const file = event.target.files[0];

    if (file) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUrl = reader.result;
        this.registrationForm.patchValue({
          file: reader.result as string,
        });
        this.editFile = false;
        this.removeUpload = true;
      };

      this.cd.markForCheck();
    }
  }

  removeUploadedFile() {
    this.imageUrl =
      'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
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
}
