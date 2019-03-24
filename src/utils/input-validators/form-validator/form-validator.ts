import { Validator } from '../validators.interface';
import { MultipleInputValue } from '../../../components/multiple-input/multiple-input-value.interface';

export const FormValidator: Validator<MultipleInputValue> = {
  validate: (val: MultipleInputValue) => {
    let testResults = [];
    Object.keys(val).forEach(i => {
      testResults.push(val[i].valid);
    });
    return testResults.every((i) => i === true);
  }
};
