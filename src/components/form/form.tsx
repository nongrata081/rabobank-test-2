import { Component, Listen, State } from '@stencil/core';
import { MultipleInputValue } from '../multiple-input/multiple-input-value.interface';

@Component({
  tag: 'rab-form',
  styleUrl: 'form.scss'
})

export class FormComponent {
  @State() formValue: MultipleInputValue;
  @State() disabled: boolean = false;

  handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.formValue));
  }

  @Listen('multipleInputValueChanged')
  handler(event: CustomEvent) {
    this.formValue = event.detail;

    let testResults = [];
    Object.keys(this.formValue).forEach(i => {
      testResults.push(this.formValue[i].valid);
    });
    this.disabled = testResults.every((i) => i === true);
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
