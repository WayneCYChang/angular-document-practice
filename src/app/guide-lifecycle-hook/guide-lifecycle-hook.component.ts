import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-lifecycle-hook',
  templateUrl: './guide-lifecycle-hook.component.html',
  styleUrls: ['./guide-lifecycle-hook.component.css']
})
export class GuideLifecycleHookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
