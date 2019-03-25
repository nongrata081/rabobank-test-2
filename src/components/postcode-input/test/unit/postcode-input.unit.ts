import { validatorsFactory } from '../../../../utils/input-validators';

let validator = validatorsFactory('postcode');


describe('postcode validator', function() {
  it('should return true when given postcode of format 1234ab', function() {
    expect(validator.validate('1234ab')).toBe(true);
  });

  it('should return false when given postcode of format ab4231', function() {
    expect(validator.validate('ab4231')).toBe(false);
  });
});
