import { Component, OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-viewchild',
  templateUrl: './lifecycle-viewchild.component.html',
  styleUrls: ['./lifecycle-viewchild.component.css']
})
export class LifecycleViewchildComponent implements AfterViewInit, AfterViewChecked, AfterContentInit{

   hero = 'Wayne';

  constructor() { }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit on lifecycle-viewchild');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit on lifecycle-viewchild');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked on lifecycle-viewchild');
  }
}
