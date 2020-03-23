import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-interaction-child',
  templateUrl: './interaction-child.component.html',
  styleUrls: ['./interaction-child.component.css']
})
export class InteractionChildComponent implements OnInit, OnChanges {
  private nameN = '';
  changeLog: string[] = [];
  inTheChild = 'in the child';

  @Output() voted = new EventEmitter<string>();

  @Input() hero: Hero;
  @Input('master') masterName: string; // Not recommendation

  @Input() set name(name: string) {
    this.nameN = (name && name.trim()) || '<no name set>';
  }

  get name(): string { return this.nameN; }

  constructor() { }

  // ngOnChanges(changes: {[propKey: string]: SimpleChanges}): void {
  // ngOnChanges(changes: SimpleChanges[]): void {
  ngOnChanges(changes: SimpleChanges) {
    const log: string[] = [];
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const changedProp = changes[propName];
        console.log(changedProp);
        const to = changedProp.currentValue;
        console.log(to);
        // const to = JSON.stringify(changedProp.currentValue);
        if (changedProp.firstChange) {
          log.push(`Initial value of ${propName} set to ${to}`);
        } else {
          const from = changedProp.previousValue;
          console.log(from);
          // const from = JSON.stringify(changedProp.previousValue);
          log.push(`${propName} changed from ${from} to ${to}`);
        }
        this.changeLog.push(log.join(', '));
      }
    }
  }

  ngOnInit(): void {
  }

  setOutput(): void {
    this.voted.emit('go go emit');
  }

  childClg(): void {
    console.log('in the child');
  }
}
