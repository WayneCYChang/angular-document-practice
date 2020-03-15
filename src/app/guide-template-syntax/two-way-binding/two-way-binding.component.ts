import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  @Input()  tryTwo: number;
  @Output() tryTwoChange = new EventEmitter<number>();

  ngOnInit(): void {
  }

  triggerEvent(): void {
    this.tryTwo = this.tryTwo + 1;
    this.tryTwoChange.emit(this.tryTwo);
  }
}
