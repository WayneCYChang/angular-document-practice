import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-style-none',
  templateUrl: './style-none.component.html',
  styleUrls: ['./style-none.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StyleNoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
