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
    value: '',
    success: false,
    error: false,
    first: '',
    last: '',
    textArea: '',
    checked: false,
    submitted: false,
    radioChecked: false,
    selectChecked: false
  };


  handleSubmit = (e) => {
    const {first, last, textArea, checked, value, selectChecked } = this.state;
    if(first && last && textArea && checked && value && selectChecked) {
        this.setState({
          submitted: true,
          success: true,
          error: false
        });
      }
      else {
        this.setState({
          submitted: true,
          error: true,
          success: false
        });
      }
    }


    handleChange = (e, { value }) => {
        this.setState({
         value
       });
    }






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
  handleChecked = () => {
    this.setState({
      checked: !this.state.checked,
      success: false,
      error: false
    });
  }

handleSelectChecked = () => {
  this.setState({
    selectChecked: true
  });
}


  render() {
    const { value } = this.state;
    return (
      <div>
        {this.state.success && <Message className="message"  color='green' >Success! Your information has been submitted</Message>}
        {this.state.error && <Message className="message"  color='red' >Error! There was a problem submitting your information. Please make sure each field is filled out</Message>}
      <Form>
        <Form.Group widths="equal">
          <Form.Field

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
          onClick={this.handleSelectChecked}
            control={Select}
            label="Status"
            options={options}
            placeholder="Status"
          />
        </Form.Group>
        <Form.Group inline>
          <label>Number of Requests</label>
          <Form.Field
            // onClick={this.handleRadio}
            control={Radio}
            label="One"
            value="1"
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            // onClick={this.handleRadio}
            control={Radio}
            label="Two"
            value="2"
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            // onClick={this.handleRadio}
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
          onClick={this.handleChecked}
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
