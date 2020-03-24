import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-style-emulated',
  templateUrl: './style-emulated.component.html',
  styleUrls: ['./style-emulated.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StyleEmulatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
