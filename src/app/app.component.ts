import { Component } from '@angular/core';
import { QuestionBase } from './guide-dynamic-form/question-base';
import { Observable } from 'rxjs';
import { QuestionService } from './question.service';

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
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  triggerHook(): void {
    this.inputHook = 0;
  }

  countProject(): void {
    this.projectLifecycle += 1;
  }
}
