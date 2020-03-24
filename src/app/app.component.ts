import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-document-practice';
  toggleLifeCycle = false;
  inputHook: number;
  projectLifecycle = 0;
  briefChild = false;
  changeStyle = false;

  triggerHook(): void {
    this.inputHook = 0;
  }

  countProject(): void {
    this.projectLifecycle += 1;
  }
}
