import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Message
} from 'semantic-ui-react';

const options = [
  { key: 's', text: 'Student', value: 'student' },
  { key: 'd', text: 'Daily Reader', value: 'daily' },
  { key: 'r', text: 'Reporter', value: 'reporter' },
];

class FormPage extends Component {
  state = {
    success: false,
    error: false,
    first: '',
    last: '',
    textArea: '',
    submitted: false
  };
  handleSubmit = () => {
    const {first, last, textArea } = this.state;
    if(first && last && textArea) {
        this.setState({
          submitted: true,
          success: true,
        });
      }
      else {
        this.setState({
          submitted: true,
          error: true
        })
      }
    }

  handleChange = (e, { value }) => this.setState({ value });

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
      submitted: false,
      success: false,
      error: false
    });

  }


  // handleError = (event) => {
    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;
  //   if(!this.state.submitted && event.target.name === '') {
  //     return true;
  //   } return false;
  // }

  render() {
    const { value } = this.state;
    return (
      <div>
        {this.state.success && <Message className="message"  color='green' >Success! Your information has been submitted</Message>}
        {this.state.error && <Message className="message"  color='red' >Error! There was a problem submitting your information. Please try again</Message>}
      <Form className="form-container">
        <Form.Group widths="equal">
          <Form.Field
            error={this.handleErro}
            name="first"
            width={2}
            value={this.state.first}
            onChange={this.handleInputChange}
            control={Input}
            label="First name"
            placeholder="First name"
          />
          <Form.Field
            name="last"
            value={this.state.last}
            onChange={this.handleInputChange}
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
          name="textArea"
          value={this.state.textArea}
          onChange={this.handleInputChange}
          control={TextArea}
          label="About"
          placeholder="Tell us more about you..."
        />
        <Form.Field
          control={Checkbox}
          label="I agree to the Terms and Conditions"
        />
        <Form.Field control={Button} color="blue" onClick={this.handleSubmit}>
          Submit
        </Form.Field>
      </Form>
    </div>
    );
  }
}

export default FormPage;
