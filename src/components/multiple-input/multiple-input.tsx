import { Component, Event, EventEmitter, Listen, State } from '@stencil/core';
import { MultipleInputValue } from './multiple-input-value.interface';

@Component({
  tag: 'rab-multiple-input',
  styleUrl: 'multiple-input.scss'
})

export class MultipleInputComponent {

  @State() multipleInputValue: MultipleInputValue = {
    postCode: {
      value: '',
      valid: false
    },
    licensePlate: {
      value: '',
      valid: false
    },
    moneyAmount: {
      value: 0,
      valid: false
    }
  };

  @Event() multipleInputValueChanged: EventEmitter<MultipleInputValue>;

  @Listen('postCodeChanged')
  postCodeChangedHandler(event: CustomEvent) {
    this.multipleInputValue.postCode = event.detail;
    this.multipleInputValueChanged.emit(this.multipleInputValue);
  }

  @Listen('moneyAmountChanged')
  moneyAmountChangedHandler(event: CustomEvent) {
    this.multipleInputValue.moneyAmount = event.detail;
    this.multipleInputValueChanged.emit(this.multipleInputValue);
  }

  @Listen('licensePlateChanged')
  licensePlateChangedHandler(event: CustomEvent) {
    this.multipleInputValue.licensePlate = event.detail;
    this.multipleInputValueChanged.emit(this.multipleInputValue);
  }

  render() {
    return (
      <div class="multiple-input-container">
        <rab-postcode-input></rab-postcode-input>
        <rab-license-plate-input></rab-license-plate-input>
        <rab-money-input></rab-money-input>
      </div>
    );
  }
}
