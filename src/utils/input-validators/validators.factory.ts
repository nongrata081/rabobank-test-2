import { Validator } from './validators.interface';
import { ValidatorsTypes } from './validators.types';
import { PostCodeValidator } from './postcode-validator/postcode-validator';
import { defaultValidator } from './default-validator/default-validator';

export function validatorsFactory(type: string): Validator<any> {
  switch(type) {
    case (ValidatorsTypes.postcode):
      return PostCodeValidator;
    default:
      return defaultValidator;
  }
}
