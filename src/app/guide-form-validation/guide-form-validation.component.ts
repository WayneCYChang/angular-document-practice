import { Component, OnInit } from '@angular/core';
import { Hero } from '../guide-forms/hero';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, NgModel, NgForm } from '@angular/forms';
import { ForbiddenName } from './forbidden-name.directive';
import { identityRevealedValidator } from './identity-revealed.directive';
import { UniqueAlterEgoValidator } from './unique-alter-ego-validator.directive';

@Component({
  selector: 'app-guide-form-validation',
  templateUrl: './guide-form-validation.component.html',
  styleUrls: ['./guide-form-validation.component.css']
})
export class GuideFormValidationComponent implements OnInit {
  hero = new Hero(1, 'Wayne', 'lighting', 'quick');
  heroForm: FormGroup;
  heroForm2: FormGroup;
  heroF2 = new Hero( null, '', '', '');
  heroC3: FormControl;
  heroAlterEgo2 = '';

  constructor(private alterEgoValidator: UniqueAlterEgoValidator) { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [Validators.required, Validators.minLength(4), ForbiddenName]),
      alterEgo: new FormControl(this.hero.alterEgo),
      power: new FormControl(this.hero.power, Validators.required)
    });

    this.heroForm2 = new FormGroup({
      name1: new FormControl(),
      alterEgo1: new FormControl(),
      power1: new FormControl()
    }, { validators: identityRevealedValidator });

    this.heroC3 = new FormControl(
      '123', {
        asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
        updateOn: 'blur'
      }
    );
  }

  get name() { return this.heroForm.get('name'); }
  get power() { return this.heroForm.get('power'); }

  onSubmit(form: NgForm) {
    console.log(form);
  }
  // ForbiddenName(control: AbstractControl) {
  //   const nameRe = /Wayne/;
  //   const name = control.value;
  //   const no = nameRe.test(name);
  //   return no ? { forbiddenName: name } : null;
  // }
}
