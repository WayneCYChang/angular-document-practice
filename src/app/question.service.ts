import { Injectable } from '@angular/core';
import { QuestionBase } from './guide-dynamic-form/question-base';
import { DropdownQuestion } from './guide-dynamic-form/question-dropdown';
import { TextboxQuestion } from './guide-dynamic-form/question-textbox';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
   // TODO: get from a remote source of question metadata
   getQuestions() {

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
