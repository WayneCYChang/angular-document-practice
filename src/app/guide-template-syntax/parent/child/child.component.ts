import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() item: string;
  @Output() outItem = new EventEmitter<string>();
  itemName = 'emit';

  constructor() { }

  ngOnInit(): void {
  }

  triggerOutput(event?: string): void {
    if (event) {
      this.outItem.emit(event);
    } else {
      this.outItem.emit(this.itemName);
    }
  }

}
