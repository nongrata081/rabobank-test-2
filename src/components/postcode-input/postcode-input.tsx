import { Component, EventEmitter, Prop, Event } from '@stencil/core';
import { Validator, validatorsFactory } from '../../utils/input-validators';

@Component({
  tag: 'rab-postcode-input',
  styleUrl: 'rab-postcode-input.scss'
})

export class PostalCodeInputComponent {

  @Prop({mutable: true}) value: string;
  @Prop() validator: string = 'postcode';

  @Event() changed: EventEmitter<string>;

  _validator: Validator<string>;

  @Prop({mutable: true}) isInputValid: boolean;

  componentWillLoad() {
    this._validator = validatorsFactory(this.validator);
    this.isInputValid = this.value && this._validator.validate(this.value);
  }

  componentWillUpdate() {
    this._validator = validatorsFactory(this.validator);
    this.isInputValid = this.value && this._validator.validate(this.value);
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
          <input type="text" class="text-input" onInput={(ev) => this.handleChange(ev)} />
          <label class={'text-input-label' + (this.value ? ' active' : '')} htmlFor="postal-input">Postcode</label>
        </div>
        { this.value && !this.isInputValid ? <span class="validation-error">{this._validator.errorMessage}</span> : null }
      </div>
    );
  }
}
