import { validatorsFactory } from '../../../../utils/input-validators';

let validator = validatorsFactory('form');

let multipleInputValueMock = {
  postCode: { value: "1231as", valid: true },
  licensePlate: { value: "1231as", valid: true },
  moneyAmount: { value: "123.00", valid: true }
};


describe('form input validator', function () {
  it('should return true when given object with valid input values', function () {
    expect(validator.validate(multipleInputValueMock)).toBe(true);
  });
});
