import { Directive, ContentChild, ViewChild, AfterContentInit, AfterViewInit, ElementRef, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { BriefDirective } from './brief.directive';

@Directive({
  selector: '[appBriefSecond]'
})
export class BriefSecondDirective implements AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @ContentChild(BriefDirective) contentBrief: BriefDirective;
  @ViewChild(BriefDirective) viewBrief: BriefDirective;
  @ContentChild('try') contentInput: ElementRef;
  @ViewChild('try') ViewInput: ElementRef;

  constructor() { }

  ngAfterContentInit(): void {
    this.showLog('AfterContentInit in directive', this.contentBrief?.dName, this.viewBrief, this.contentInput, this.ViewInput);
  }

  ngAfterContentChecked(): void {
    this.showLog('AfterContentChecked in directive', this.contentBrief?.dName, this.viewBrief, this.contentInput, this.ViewInput);
  }

  ngAfterViewInit(): void {
    this.showLog('AfterViewInit in directive', this.contentBrief?.dName, this.viewBrief, this.contentInput, this.ViewInput);
  }

  ngAfterViewChecked(): void {
    this.showLog('AfterViewChecked in directive', this.contentBrief?.dName, this.viewBrief, this.contentInput, this.ViewInput);
  }

  showLog(name: string, one: any, two: any, three: any, four: any): void {
    console.log(name + '(@ContentChild): ' + one);
    console.log(name + '(@ViewChild): ' + two);
    console.log(name + '(@ContentChild reference element): ' + three);
    console.log(name + '(@ViewChild reference element): ' + four);
  }
}
