import { Component, EventEmitter, Prop, Event, State } from '@stencil/core';
import { Validator, validatorsFactory } from '../../utils/input-validators';
import { genericInput } from '../../interfaces/interface';

@Component({
  tag: 'rab-postcode-input',
  styleUrl: 'postcode-input.scss'
})

export class PostalCodeInputComponent {

  @State() value: string;
  @State() isPostCodeValid: boolean;
  @Prop() validator: string = 'postcode';

  @Event() postCodeChanged: EventEmitter<genericInput>;

  _validator: Validator<string>;

  componentWillLoad() {
    this._validator = validatorsFactory(this.validator);
  }

  componentWillUpdate() {
    this._validator = validatorsFactory(this.validator);
  }

  handleChange(ev) {
    this.value = ev.target ? ev.target.value : null;
    this.isPostCodeValid = this._validator.validate(this.value);
    this.postCodeChanged.emit({value: this.value, valid: this.isPostCodeValid});
  }

  render() {
    return (
      <div>
        <div class={'text-input-container postcode-input-container' + (this.isPostCodeValid ? ' valid' : '')}>
          <input id="postcode-input" type="text" maxlength="6" class="text-input postcode-input" onInput={(ev) => this.handleChange(ev)} />
          <label htmlFor="postcode-input" class={'text-input-label' + (this.value ? ' active' : '')}>Postcode</label>
        </div>
        { this.value && !this.isPostCodeValid ? <span class="validation-error">{this._validator.errorMessage}</span> : null }
      </div>
    );
  }
}
