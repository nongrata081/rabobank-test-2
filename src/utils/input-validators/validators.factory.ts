import { Validator } from './validators.interface';
import { ValidatorsTypes } from './validators.types';
import { PostCodeValidator } from './postcode-validator/postcode-validator';
import { defaultValidator } from './default-validator/default-validator';
import { LicensePlateValidator } from './license-plate-validator/license-plate-validator';
import { MoneyInputValidator } from './money-input-validator/money-input.validator';
import { FormValidator } from './form-validator/form-validator';

export function validatorsFactory(type: string): Validator<any> {
  switch(type) {
    case (ValidatorsTypes.postCode):
      return PostCodeValidator;
    case (ValidatorsTypes.licensePlate):
      return LicensePlateValidator;
    case (ValidatorsTypes.moneyInput):
      return MoneyInputValidator;
    case (ValidatorsTypes.form):
      return FormValidator;
    default:
      return defaultValidator;
  }
}
