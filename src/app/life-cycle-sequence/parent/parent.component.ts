import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-1',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class Parent1Component implements OnInit {
  @Input() name: string;
  private _name = 'parent';

  constructor() {
    console.log(`${this._name} constructor`);
  }

  ngOnChanges() {
    console.log(`${this._name} ngOnChange`);
  }

  ngOnInit(): void {
    console.log(`${this._name} ngOnInit`);
  }

  // ngDoCheck() {
  //   console.log(`${this._name} ngDoCheck`);
  // }

  ngAfterContentInit() {
    console.log(`${this._name} ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    console.log(`${this._name} ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    console.log(`${this._name} ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    console.log(`${this._name} ngAfterViewChecked`);
  }
}
