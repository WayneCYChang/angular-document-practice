import { Component, OnInit, Input, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-life-cycle-data-change',
  templateUrl: './life-cycle-data-change.component.html',
  styleUrls: ['./life-cycle-data-change.component.css']
})
export class LifeCycleDataChangeComponent implements OnChanges, OnInit, DoCheck ,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  // @Input() title2: string;

  // constructor() { }

  // ngOnChanges() {
  //   console.log('lifeData ngOnChanges');
  // }

  // ngOnInit(): void {
  //   console.log('lifeData ngOnInit');
  // }

  // ngDoCheck() {
  //   console.log('lifeData DoCheck');
  // }

  // ngAfterContentInit() {
  //   console.log('lifeData ngAfterContentInit');
  // }

  // ngAfterContentChecked() {
  //   console.log('lifeData ngAfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   console.log('lifeData ngAfterViewInit');
  // }

  // ngAfterViewChecked() {
  //   console.log('lifeData ngAfterViewChecked');
  // }

  // changeTitle2() {
  //   this.title2 = this.title2 + '!';
  // }

  @Input() name: string;
  data = [];
  constructor() {
    this.data.push('constructor');
    console.log('constructor');
  }
  ngOnInit() {
    this.data.push('ngOnInit');
    console.log('ngOnInit');
  }
  ngOnChanges() {
    this.data.push('ngOnChanges');
    console.log('ngOnChanges');
  }
  ngDoCheck() {
    this.data.push('ngDoCheck');
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    this.data.push('ngAfterContentInit');
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    this.data.push('ngAfterContentChecked');
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    this.data.push('ngAfterViewInit');
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.data.push('ngAfterViewChecked');
    console.log('ngAfterViewChecked');
  }
  ngDoDestroy() {
    this.data.push('ngDoDestroy');
    console.log('ngDoDestroy');
  }
  changeName() {
    this.name = this.name+'!';
  }
}
