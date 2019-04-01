import { AbstractControl } from '@angular/forms';
export function ValidatorEmail(control: AbstractControl) {
  if (!/^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}/.test(control.value)) {
    return { validEmial: true };
  }
  return null;
}
