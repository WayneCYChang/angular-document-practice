import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-of-template-syntax',
  templateUrl: './child-of-template-syntax.component.html',
  styleUrls: ['./child-of-template-syntax.component.css']
})
export class ChildOfTemplateSyntaxComponent implements OnInit {
  @Output() outPutChild = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickOutPut(): void {
    this.outPutChild.emit();
  }
}
