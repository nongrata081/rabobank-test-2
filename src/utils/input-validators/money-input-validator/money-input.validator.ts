import { Validator } from '../validators.interface';

export const MoneyInputValidator: Validator<string> = {
  validate: (val: string) => {
    return 0 < Number(val) && Number(val) < 1000;
  },
  errorMessage: 'Please enter a valid amount of money (e.g. 0 < x < 1000)'
};
