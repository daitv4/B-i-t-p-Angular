import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorEmail } from '../common/validate-email';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formGroup: FormGroup;
  constructor(
  ) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, ValidatorEmail]),
      age: new FormControl('', [Validators.required]),
      currentPos: new FormControl('', []),
      radio_buttons: new FormControl('', [Validators.required]),
      mostLike: new FormControl('', []),
      prefer: new FormControl('', []),
      comment: new FormControl('', [])
    });
  }

  onSubmit(form) {
    console.log(form);
  }

}
