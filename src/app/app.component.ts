import { Component, OnInit } from '@angular/core';
import { QuestionBase } from './guide-dynamic-form/question-base';
import { Observable } from 'rxjs';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular 10';
  title = 'angular-document-practice';
  title2 = 'title2 before change';
  toggleLifeCycle = false;
  inputHook: number;
  projectLifecycle = 0;
  briefChild = false;
  changeStyle = false;
  sequence = false;
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.title2 = 'change to title2';
    // }, 3000);
    setTimeout(() => {
      this.name = 'Angular 10!!!';
    }, 3000);
  }

  triggerHook(): void {
    this.inputHook = 0;
  }

  countProject(): void {
    this.projectLifecycle += 1;
  }

  clicked() {
    this.title2 = 'change to title2';
  }

  clickToToggleSequence() {
    this.sequence = !this.sequence;
  }
}
