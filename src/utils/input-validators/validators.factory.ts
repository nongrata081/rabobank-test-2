import { Validator } from './validators.interface';
import { ValidatorsTypes } from './validators.types';
import { PostCodeValidator } from './postcode-validator/postcode-validator';
import { defaultValidator } from './default-validator/default-validator';
import { LicensePlateValidator } from './license-plate-validator/license-plate-validator';

export function validatorsFactory(type: string): Validator<any> {
  switch(type) {
    case (ValidatorsTypes.postCode):
      return PostCodeValidator;
    case (ValidatorsTypes.licensePlate):
      return LicensePlateValidator;
    default:
      return defaultValidator;
  }
}
