import { Directive } from '@angular/core';

@Directive({
  selector: '[appBrief]'
})
export class BriefDirective {
  dName = 'in the brief directive';

  constructor() { }

}
