import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react';

const options = [
  { key: 's', text: 'Student', value: 'student' },
  { key: 'd', text: 'Daily Reader', value: 'daily' },
  { key: 'r', text: 'Reporter', value: 'reporter' },
];

class FormPage extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form className="form-container">
        <Form.Group widths="equal">
          <Form.Field
            width={2}
            control={Input}
            label="First name"
            placeholder="First name"
          />
          <Form.Field
          width={2}
            control={Input}
            label="Last name"
            placeholder="Last name"
          />
          <Form.Field
          width={2}
            control={Select}
            label="Status"
            options={options}
            placeholder="Status"
          />
        </Form.Group>
        <Form.Group inline>
          <label>Number of Requests</label>
          <Form.Field
            control={Radio}
            label="One"
            value="1"
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label="Two"
            value="2"
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label="Three"
            value="3"
            checked={value === '3'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="About"
          placeholder="Tell us more about you..."
        />
        <Form.Field
          control={Checkbox}
          label="I agree to the Terms and Conditions"
        />
        <Form.Field control={Button} color="blue">
          Submit
        </Form.Field>
      </Form>
    );
  }
}

export default FormPage;
