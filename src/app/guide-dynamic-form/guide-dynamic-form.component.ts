import { Component, OnInit, Input } from '@angular/core';
import { QuestionControlService } from './question-control.service';
import { QuestionBase } from './question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-guide-dynamic-form',
  templateUrl: './guide-dynamic-form.component.html',
  styleUrls: ['./guide-dynamic-form.component.css'],
  providers: [ QuestionControlService ]
})
export class GuideDynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) { }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
