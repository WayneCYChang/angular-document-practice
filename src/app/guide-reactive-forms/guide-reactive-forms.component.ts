import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-guide-reactive-forms',
  templateUrl: './guide-reactive-forms.component.html',
  styleUrls: ['./guide-reactive-forms.component.css']
})
export class GuideReactiveFormsComponent implements OnInit {
  name = new FormControl('');

  get aliases() {
    return this.profile3.get('aliases') as FormArray;
  }

  profile = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  profile2 = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  profile3 = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.profile2);
    console.log(this.aliases);
    console.log(this.aliases.controls);
  }

  updateValue(): void {
    this.name.setValue('Wayne');
  }

  patchValue(): void {
    this.profile2.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 street'
      }
    });
  }

  addAlias(): void {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit(): void {
    console.log(this.profile.value);
    console.warn(this.profile.valid);
  }
}
