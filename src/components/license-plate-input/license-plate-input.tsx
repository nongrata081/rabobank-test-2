import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';
import { Validator, validatorsFactory } from '../../utils/input-validators';
import { genericInput } from '../../interfaces/interface';

@Component({
  tag: 'rab-license-plate-input',
  styleUrl: 'license-plate-input.scss'
})

export class LicensePlateInputComponent {

  @State() value: string;
  @State() isLicensePlateValid: boolean;
  @Prop() validator: string = 'license-plate';

  @Event() licensePlateChanged: EventEmitter<genericInput>;

  _validator: Validator<string>;

  componentWillLoad() {
    this._validator = validatorsFactory(this.validator);
  }

  componentWillUpdate() {
    this._validator = validatorsFactory(this.validator);
  }

  handleChange(ev) {
    this.value = ev.target ? ev.target.value : null;
    this.isLicensePlateValid = this._validator.validate(this.value);
    this.licensePlateChanged.emit({value: this.value, valid: this.isLicensePlateValid});
  }

  render() {
    return (
      <div>
        <div class={'text-input-container' + (this.isLicensePlateValid ? ' valid' : '')}>
          <input id="license-input" type="text" maxlength="6" class="text-input" onInput={(ev) => this.handleChange(ev)}/>
          <label htmlFor="license-input" class={'text-input-label' + (this.value ? ' active' : '')}>License plate</label>
        </div>
        { this.value && !this.isLicensePlateValid ? <span class="validation-error">{this._validator.errorMessage}</span> : null }
      </div>
    )
  }
}
