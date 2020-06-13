import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {
    value?: string,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    type?: string,
    options?: {key: string, value: string}[]
  } = {}) {
    super(options);
    this.options = options.options || [];
  }
}
