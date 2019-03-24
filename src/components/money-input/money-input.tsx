import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';
import { Validator, validatorsFactory } from '../../utils/input-validators';
import { moneyAmount } from './money-amount-interface';

@Component({
  tag: 'rab-money-input',
  styleUrl: 'money-input.scss'
})

export class MoneyInputComponent {
  private moneyInput: HTMLInputElement;

  @State() value: number;
  @State() isMoneyAmountValid: boolean;

  @Prop() validator: string = 'money-input';

  @Event() moneyAmountChanged: EventEmitter<moneyAmount>;

  _validator: Validator<number>;

  componentWillLoad() {
    this._validator = validatorsFactory(this.validator);
  }

  componentWillUpdate() {
    this._validator = validatorsFactory(this.validator);
  }

  handleBlur(ev) {
    let formattedVal;

    if (ev.target.value === '') {
      formattedVal = parseFloat('0').toFixed(2);
    } else {
      formattedVal = Math.abs(parseFloat(ev.target.value)).toFixed(2);
    }
    this.value = formattedVal;
    this.moneyInput.value = formattedVal;
    this.isMoneyAmountValid = this._validator.validate(this.value);
    this.moneyAmountChanged.emit({value: this.value, valid: this.isMoneyAmountValid});
  }

  render() {
    return (
      <div>
        <div class={'text-input-container money-input-container' + (this.isMoneyAmountValid ? ' valid' : '')}>
          <input id="money-input"
                 type="number"
                 min="0"
                 class="text-input money-input"
                 onBlur={(ev) => this.handleBlur(ev)}
                 ref={el => this.moneyInput = el as HTMLInputElement}
          />
          <label htmlFor="money-input" class={'text-input-label' + (this.value ? ' active' : '')}>Money input</label>
          <div class="money-input-select-container">
            <select class="money-input-select">
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
              <option value="gbp">GBP</option>
            </select>
          </div>
        </div>
        { this.value && !this.isMoneyAmountValid ? <span class="validation-error">{this._validator.errorMessage}</span> : null }
      </div>
    );
  }
}
