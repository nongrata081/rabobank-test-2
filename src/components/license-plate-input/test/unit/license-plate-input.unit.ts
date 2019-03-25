import { validatorsFactory } from '../../../../utils/input-validators';

let validator = validatorsFactory('license-plate');


describe('license-plate validator', function() {
  it('should return true when given license plate of dutch format', function() {
    expect(validator.validate('XX9999')).toBe(true);
    expect(validator.validate('99XX99')).toBe(true);
    expect(validator.validate('XX99XX')).toBe(true);
    expect(validator.validate('XXXX99')).toBe(true);
    expect(validator.validate('99XXXX')).toBe(true);
    expect(validator.validate('99XXX9')).toBe(true);
    expect(validator.validate('9XXX99')).toBe(true);
    expect(validator.validate('XX999X')).toBe(true);
    expect(validator.validate('X999XX')).toBe(true);
    expect(validator.validate('XXX99X')).toBe(true);
  });
});
