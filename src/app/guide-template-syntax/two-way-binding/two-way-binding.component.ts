import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  @Input()  Model: number;
  @Output() ModelChange = new EventEmitter<number>();

  ngOnInit(): void {
  }

  triggerEvent(): void {
    this.Model = this.Model + 1;
    this.ModelChange.emit(this.Model);
  }
}
