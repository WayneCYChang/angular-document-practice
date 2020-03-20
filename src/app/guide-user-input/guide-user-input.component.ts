import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-user-input',
  templateUrl: './guide-user-input.component.html',
  styleUrls: ['./guide-user-input.component.css']
})
export class GuideUserInputComponent implements OnInit {
  clickMessage: string;
  values = 0;
  values2 = 0;
  values3 = 0;
  name: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.clickMessage = 'clicked';
  }

  onKey(event: any): void {
    this.values = event;
    this.values2 = event.target;
    this.values3 = event.target.value;
  }

  onKey2(event: KeyboardEvent): void {// best way, clearly expression
    this.values = +(event.target as HTMLInputElement).value;
  }
}
