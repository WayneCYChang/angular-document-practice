import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-life-cycle-sequence',
  templateUrl: './life-cycle-sequence.component.html',
  styleUrls: ['./life-cycle-sequence.component.css']
})
export class LifeCycleSequenceComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  name = 'Angular';
  private _name = 'root';

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
