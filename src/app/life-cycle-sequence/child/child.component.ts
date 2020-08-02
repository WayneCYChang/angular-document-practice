import { Component, OnInit, Input } from '@angular/core';
import { LifeCycleSequenceComponent } from '../life-cycle-sequence.component';
import { Parent1Component } from '../parent/parent.component';

@Component({
  selector: 'app-child-1',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class Child1Component implements OnInit {
  @Input() name: string;
  private _name = 'child';

  constructor(private parent: Parent1Component) {
    console.log(`${this._name} constructor`);
  }

  ngOnChanges() {
    console.log(`${this._name} ngOnChange`);
  }

  ngOnInit(): void {
    this.parent.name = 'Angular Next';
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
