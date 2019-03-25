import { validatorsFactory } from '../../../../utils/input-validators';

let validator = validatorsFactory('money-input');


describe('money-input validator', function() {
  it('should return false when given amount of money >= 1000', function() {
    expect(validator.validate('1000')).toBe(false);
  });

  it('should return true when given amount of money < 1000', function() {
    expect(validator.validate('999')).toBe(true);
  });
});
