import { Component, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements AfterContentInit, AfterContentChecked, AfterViewInit {

  constructor() { }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit on lifecycle-child. Content projected by guide-lifecycle-hook');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked on lifecycle-child. Content projected by guide-lifecycle-hook');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit on lifecycle-child. Content projected by guide-lifecycle-hook');
  }
}
