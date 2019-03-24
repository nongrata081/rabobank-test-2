import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';
import { Validator, validatorsFactory } from '../../utils/input-validators';

@Component({
  tag: 'rab-license-plate-input',
  styleUrl: 'license-plate-input.scss'
})

export class LicensePlateInputComponent {

  @State() value: string;
  @State() isInputValid: boolean;
  @Prop() validator: string = 'license-plate';

  @Event() changed: EventEmitter<string>;

  _validator: Validator<string>;

  componentWillLoad() {
    this._validator = validatorsFactory(this.validator);
  }

  componentWillUpdate() {
    this._validator = validatorsFactory(this.validator);
  }

  handleChange(ev) {
    this.value = ev.target ? ev.target.value : null;
    this.changed.emit(this.value);
    this.isInputValid = this._validator.validate(this.value);
  }

  render() {
    return (
      <div>
        <div class={'text-input-container' + (this.isInputValid ? ' valid' : '')}>
          <input id="license-input" type="text" maxlength="6" class="text-input" onInput={(ev) => this.handleChange(ev)}/>
          <label htmlFor="license-input" class={'text-input-label' + (this.value ? ' active' : '')}>License plate</label>
        </div>
        { this.value && !this.isInputValid ? <span class="validation-error">{this._validator.errorMessage}</span> : null }
      </div>
    )
  }
}
