import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ValidatePassword {
  static MatchPassword(
    abstractControl: AbstractControl
  ): ValidationErrors | null {
    const password = abstractControl.get('password')?.value;
    const confirmPassword = abstractControl.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { MatchPassword: true };
    } else {
      return null;
    }
  }
}
