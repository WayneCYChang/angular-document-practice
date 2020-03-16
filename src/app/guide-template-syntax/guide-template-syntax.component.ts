import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-guide-template-syntax',
  templateUrl: './guide-template-syntax.component.html',
  styleUrls: ['./guide-template-syntax.component.css']
})
export class GuideTemplateSyntaxComponent implements OnInit {
  item: string;
  aUrl: string;
  inTheComponent: number;
  heroes: Hero[];
  isUnChanged: boolean;
  actionName: string;
  class: string;
  width: number;
  widthString: string;
  event1: any;
  event2: any;
  event3: any;
  getChild: string;
  twoBind: number;
  setClass: {};
  setStyle: {};
  exampleClass: string;
  exampleStyle: string;
  exampleBind: string;
  nullData: undefined;
  currentItem: string;
  showReferenceVariable: any;
  title: string;
  date: number;
  unknow = {
    item: null
  };
  item2: Hero = {
    id: null,
    name: null
  };
  fillColor: string;
  value: number;

  constructor() {
    this.item = 'interpolation';
    this.aUrl = '/';
    this.inTheComponent = 1;
    this.heroes = [
      new Hero(1, 'Windstorm')
    ];
    this.isUnChanged = true;
    this.actionName = 'actionName';
    this.class = 'class';
    this.width = 100;
    this.widthString = '280px';
    this.twoBind = 1;
    this.setClass = {
      'class-one': true,
      'class-two': false,
      'class-three': true
    };
    this.setStyle = {
      'font-size': true ? '12px' : '14px',
      'font-weight': true ? 'bold' : 'normal',
      'font-style': true ? 'italic' : 'normal'
    };
    this.exampleClass = '{\'class\': true }';
    this.exampleStyle = '{\'font-size\': true }';
    this.currentItem = 'a1';
    this.title = 'lowercase title';
    this.date = Date.now();
    this.fillColor = 'rgb(255, 0, 0)';
    this.value = 1;
  }

  ngOnInit(): void {
  }

  getVal(): number {
    return 1 + 1;
  }

  deleteHero(hero?: Hero): void { }

  onSubmit(form: HTMLFormElement): void { }

  getTriggerEvent(event: any, eventNumber: string): any {
    if (eventNumber === '1') {
      this.event1 = event;
    }
    if (eventNumber === '2') {
      this.event2 = event;
    }
    if (eventNumber === '3') {
      this.event3 = event;
    }
  }

  getText(eventNumber: string): string {
    if (eventNumber === '1') {
      return this.event1 ? 'Get $event: ' + this.event1 : 'Get $event:';
    }
    if (eventNumber === '2') {
      return this.event2;
    }
    if (eventNumber === '3') {
      return this.event3;
    }
  }

  triggerFromChild(): void {
    this.getChild = 'Trigger from child';
  }

  setUpperCase(value: string): void {
    this.exampleBind = value.toUpperCase();
  }

  showConsoleLog(event: any): void {
    console.log(event);
  }

  trackByItems(index: number, item: Hero): number {
    return item.id;
  }

  getReferenceVariable(event: any): void {
    this.showReferenceVariable = event;
  }

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }

  getValue(reference: any): void {
    console.log(reference);
  }
}
