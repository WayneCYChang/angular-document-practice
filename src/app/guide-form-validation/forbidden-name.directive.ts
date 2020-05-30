import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl, AbstractControl, Validators, ValidatorFn } from '@angular/forms';

// pure validate
export function ForbiddenName(control: AbstractControl) {
    const nameRe = /Wayne/;
    const name = control.value;
    const no = nameRe.test(name);
    return no ? { forbiddenName: name } : null;
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ForbiddenNameDirective, multi: true}
  ]
})
export class ForbiddenNameDirective implements Validator {
  @Input('appForbiddenName') forbiddenNameString: string;

  // pure validate
  // validate(control: AbstractControl) {
  //   // return ForbiddenName(control);
  //   const nameRe = /Wayne/;
  //   const name = control.value;
  //   const no = nameRe.test(name);
  //   return no ? { forbiddenName: name } : null;
  // }

  // validate with parameter
  validate(control: AbstractControl) {
    return this.forbiddenNameString ? this.forbiddenNameNoPure(new RegExp(this.forbiddenNameString, 'i'))(control) : null;
  }

  forbiddenNameNoPure(nameRe: RegExp) {
    return (control: AbstractControl) => {
      const name = control.value;
      const no = nameRe.test(name);
      return no ? { forbiddenName: name } : null;
    };
  }
}
