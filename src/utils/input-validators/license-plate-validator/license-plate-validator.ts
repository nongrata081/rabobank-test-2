import { Validator } from '../validators.interface';

const dutchLicensePlateRegex: RegExp[] = [
  /^[a-zA-Z]{2}[\d]{2}[\d]{2}$/,
  /^[\d]{2}[\d]{2}[a-zA-Z]{2}$/,
  /^[\d]{2}[a-zA-Z]{2}[\d]{2}$/,
  /^[a-zA-Z]{2}[\d]{2}[a-zA-Z]{2}$/,
  /^[a-zA-Z]{2}[a-zA-Z]{2}[\d]{2}$/,
  /^[\d]{2}[a-zA-Z]{2}[a-zA-Z]{2}$/,
  /^[\d]{2}[a-zA-Z]{3}[\d]{1}$/,
  /^[\d]{1}[a-zA-Z]{3}[\d]{2}$/,
  /^[a-zA-Z]{2}[\d]{3}[a-zA-Z]{1}$/,
  /^[a-zA-Z]{1}[\d]{3}[a-zA-Z]{2}$/,
  /^[a-zA-Z]{3}[\d]{2}[a-zA-Z]{1}$/,
  /^[a-zA-Z]{1}[\d]{2}[a-zA-Z]{3}$/,
  /^[\d]{1}[a-zA-Z]{2}[\d]{3}$/,
  /^[\d]{3}[a-zA-Z]{2}[\d]{1}$/
];

export const LicensePlateValidator: Validator<string> = {
  validate: (val: string) => {
    let testResults = [];
    dutchLicensePlateRegex.forEach((i) => {
      testResults.push(i.test(val));
    });
    return testResults.indexOf(true) !== -1;
  },
  errorMessage: 'Please enter a valid license plate (e.g. format: XX9999)'
};
