import { Component, Listen, Prop, State } from '@stencil/core';
import { MultipleInputValue } from '../multiple-input/multiple-input-value.interface';
import { Validator, validatorsFactory } from '../../utils/input-validators';

@Component({
  tag: 'rab-form',
  styleUrl: 'form.scss'
})

export class FormComponent {
  @State() formValue: MultipleInputValue;
  @State() disabled: boolean = false;

  @Prop() validator: string = 'form';

  _validator: Validator<MultipleInputValue>;

  componentWillLoad() {
    this._validator = validatorsFactory(this.validator);
  }

  componentWillUpdate() {
    this._validator = validatorsFactory(this.validator);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.formValue));
  }

  @Listen('multipleInputValueChanged')
  handler(event: CustomEvent) {
    this.formValue = event.detail;
    this.disabled = this._validator.validate(this.formValue);
  }

  render() {
    return (
      <div>
        <h1 class="app-heading">Rabobank assignment</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <rab-multiple-input></rab-multiple-input>
          <input class="form-submit" type="submit" value="Submit" disabled={!this.disabled} />
        </form>
      </div>
    );
  }
}
