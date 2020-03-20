import {
  Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { LifecycleViewchildComponent } from './lifecycle-viewchild/lifecycle-viewchild.component';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-guide-lifecycle-hook',
  templateUrl: './guide-lifecycle-hook.component.html',
  styleUrls: ['./guide-lifecycle-hook.component.css']
})
export class GuideLifecycleHookComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  countHook = 0;
  @Input() triggerHook: number;
  @Output() triggerOutput = new EventEmitter<number>();
  projectedChild = 0;
  toggleViewChild = true;
  @ViewChild(LifecycleViewchildComponent) afterView: LifecycleViewchildComponent;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.countHook++;
    console.log('OnChanges ' + this.countHook + ' ' + this.triggerHook);
  }

  ngOnInit(): void {
    this.countHook++;
    console.log('OnInit ' + this.countHook);
  }

  ngDoCheck(): void {
    this.countHook++;
    console.log('DoCheck ' + this.countHook);
  }

  ngAfterContentInit(): void {
    this.countHook++;
    console.log('AfterContentInit ' + this.countHook);
  }

  ngAfterContentChecked(): void {
    this.countHook++;
    console.log('AfterContentChecked ' + this.countHook);
  }

  ngAfterViewInit(): void {
    this.countHook++;
    console.log('AfterViewInit ' + this.countHook);
  }

  ngAfterViewChecked(): void {
    this.countHook++;
    console.log('AfterViewChecked ' + this.countHook);
  }

  ngOnDestroy(): void {
    this.countHook++;
    console.log('OnDestroy ' + this.countHook++);
  }

  countProject(): void {
    this.projectedChild++;
  }

  clickViewChild(): void {
    console.log(this.afterView?.hero);
  }

  clickViewChildButton(): void {
    this.toggleViewChild = !this.toggleViewChild;
  }
}
