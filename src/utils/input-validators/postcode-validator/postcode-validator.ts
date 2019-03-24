import { Validator } from '../validators.interface';

export const PostCodeValidator: Validator<string> = {
  validate: (val: string) => {
    const dutchPostCodeRegex = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
    return dutchPostCodeRegex.test(val);
  },
  errorMessage: 'Please enter a valid postcode (e.g. format: 1234 aa)'
};
