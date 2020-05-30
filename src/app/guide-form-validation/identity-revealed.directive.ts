import { Directive } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors, NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const name1 = control.get('name1')?.value || null;
  const alterEgo1 = control.get('alterEgo1')?.value || null;
  const name = control.get('heroName')?.value || null;
  const alterEgo = control.get('heroAlterEgo')?.value || null;

  if (name1 && alterEgo1) {
    return name1 && alterEgo1 && name1 === alterEgo1 ? { identityRevealed: true } : null;
  } else {
    return name && alterEgo && name === alterEgo ? { identityRevealed: true } : null;
  }
};

@Directive({
  selector: '[appIdentityRevealed]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IdentityRevealedDirective, multi: true}]
})
export class IdentityRevealedDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    console.log(control);
    return identityRevealedValidator(control);
  }
}
