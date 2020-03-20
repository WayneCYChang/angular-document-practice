import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges,
  ViewChild,
  ContentChild,
  ContentChildren,
  ViewChildren,
  Input
} from '@angular/core';
import { LifeCycleBriefChildComponent } from './life-cycle-brief-child/life-cycle-brief-child.component';
import { BriefDirective } from './brief.directive';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-life-cycle-brief',
  templateUrl: './life-cycle-brief.component.html',
  styleUrls: ['./life-cycle-brief.component.css']
})
export class LifeCycleBriefComponent implements
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() lInput: number;
  @ContentChild(LifeCycleBriefChildComponent) lContentChild: LifeCycleBriefChildComponent;
  @ContentChildren(LifeCycleBriefChildComponent) lContentChildren: LifeCycleBriefChildComponent;
  @ViewChild(LifeCycleBriefChildComponent) lViewChild: LifeCycleBriefChildComponent;
  @ViewChildren(LifeCycleBriefChildComponent) lViewChildren: LifeCycleBriefChildComponent;
  @ContentChild(BriefDirective) contentBrief: BriefDirective;
  @ViewChild(BriefDirective) viewBrief: BriefDirective;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.showLog('OnChanges', this.lInput, this.lContentChild?.name, this.lContentChildren, this.lViewChild?.name, this.lViewChildren,
    this.contentBrief, this.viewBrief);
  }

  ngOnInit(): void {
    this.showLog('OnInit', this.lInput, this.lContentChild?.name, this.lContentChildren, this.lViewChild?.name, this.lViewChildren,
    this.contentBrief, this.viewBrief);
  }

  ngDoCheck(): void {
    this.showLog('DoCheck', this.lInput, this.lContentChild?.name, this.lContentChildren, this.lViewChild?.name, this.lViewChildren,
    this.contentBrief, this.viewBrief);
  }

  ngAfterContentInit(): void {
    this.showLog('AfterContentInit', this.lInput, this.lContentChild?.name, this.lContentChildren, this.lViewChild?.name, this.lViewChildren,
    this.contentBrief, this.viewBrief);
  }

  ngAfterContentChecked(): void {
    this.showLog('AfterContentChecked', this.lInput, this.lContentChild?.name, this.lContentChildren, this.lViewChild?.name, this.lViewChildren,
    this.contentBrief, this.viewBrief);
  }

  ngAfterViewInit(): void {
    this.showLog('AfterViewInit', this.lInput, this.lContentChild?.name, this.lContentChildren, this.lViewChild?.name, this.lViewChildren,
    this.contentBrief, this.viewBrief);
  }

  ngAfterViewChecked(): void {
    this.showLog('AfterViewChecked', this.lInput, this.lContentChild?.name, this.lContentChildren, this.lViewChild?.name, this.lViewChildren,
    this.contentBrief, this.viewBrief);
  }

  ngOnDestroy(): void {
    this.showLog('OnDestroy', this.lInput, this.lContentChild?.name, this.lContentChildren, this.lViewChild?.name, this.lViewChildren,
    this.contentBrief, this.viewBrief);
  }

  showLog(name: string, one: any, two: any, three: any, four: any, five: any, six: any, seven: any): void {
    console.log(name + '(@Input): ' + one);
    console.log(name + '(@ContentChild): ' + two);
    console.log(name + '(@ContentChildren): ' + three);
    console.log(name + '(@ViewChild): ' + four);
    console.log(name + '(@ViewChildren): ' + five);
    console.log(name + '(@ContentChild directive): ' + six);
    console.log(name + '(@ViewChild directive): ' + seven);
  }
}
