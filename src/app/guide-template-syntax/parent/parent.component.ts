import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  currentItem: string;
  getOutput = '';
  projectParent = 0;

  constructor() {
    this.currentItem = 'chang to currentItem';
  }

  ngOnInit(): void {
  }

  triggerFromChildEvent(event: string): void {
    this.getOutput = event;
  }

  project(): void {
    this.projectParent += 1;
  }
}
