import { Validator } from '../validators.interface';

export const PostCodeValidator: Validator<string> = {
  validate: (val: string) => {
    const dutchPostCoderegex = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
    return dutchPostCoderegex.test(val);
  },
  errorMessage: 'Please enter a valid postcode of format: 1234 aa'
};
