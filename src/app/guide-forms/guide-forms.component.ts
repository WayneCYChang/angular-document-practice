import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-guide-forms',
  templateUrl: './guide-forms.component.html',
  styleUrls: ['./guide-forms.component.css']
})
export class GuideFormsComponent implements OnInit {
  // FIXME: form bug

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  constructor() { }

  ngOnInit(): void {
    console.log('%cExpressionChangedAfterItHasBeenCheckedError Bug here', 'background: #222; color: #bada55');
  }

  onSubmit(): void {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
