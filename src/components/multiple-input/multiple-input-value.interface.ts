import { genericInput } from '../../interfaces/interface';
import { moneyAmount } from '../money-input/money-amount-interface';

export interface MultipleInputValue {
  postCode?: genericInput;
  licensePlate?: genericInput;
  moneyAmount?: moneyAmount;
}
