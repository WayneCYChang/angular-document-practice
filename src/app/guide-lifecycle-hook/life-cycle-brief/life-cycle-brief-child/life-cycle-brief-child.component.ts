import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-brief-child',
  templateUrl: './life-cycle-brief-child.component.html',
  styleUrls: ['./life-cycle-brief-child.component.css']
})
export class LifeCycleBriefChildComponent implements OnInit {
  name = 'in the life cycle brief child';

  constructor() { }

  ngOnInit(): void {
  }

}
