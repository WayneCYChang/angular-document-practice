import { Directive, Injectable, forwardRef } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, AsyncValidatorFn, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HeroesService } from './heroes.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueAlterEgoValidator implements AsyncValidator {
  constructor(private heroesService: HeroesService) {}

  validate(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.heroesService.isAlterEgoTaken(ctrl.value)
      .pipe(
        map(isTaken => (isTaken ? { uniqueAlterEgo: true } : null)),
        catchError(() => of(null))
      );
  }
}

@Directive({
  selector: '[appUniqueAlterEgoValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueAlterEgoValidator),
      multi: true
    }
  ]
})
export class UniqueAlterEgoValidatorDirective {

  constructor(private validator: UniqueAlterEgoValidator) { }

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }
}
