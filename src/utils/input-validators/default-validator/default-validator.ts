import { Validator } from '../validators.interface';

export const defaultValidator: Validator<any> = {
  validate: (_x: any) => true
};
