import React from 'react';
import Axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailsent: null,
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      disabled: true,
    });

    Axios.post('https://dz-portfolio-backend.herokuapp.com/api/email', this.state)
      .then(res => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailsent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailsent: false,
          });
        }
      })
      .catch(err => {
        console.log(err);

        this.setState({
          disabled: false,
          emailsent: false,
        });
      });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="full-name">Full Name</Form.Label>
            <Form.Control
              id="full-name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              id="message"
              name="message"
              as="textarea"
              rows="3"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button
            className="d-inline-block"
            variant="outline-dark"
            type="submit"
            disabled={this.state.disabled}
          >
            Send
          </Button>

          {this.state.emailsent === true && (
            <p className="d-inline success-msg">Email Sent</p>
          )}
          {this.state.emailsent === false && (
            <p className="d-inline err-msg">Email Not Sent</p>
          )}
        </Form>
      </div>
    );
  }
}

export default FormContent;
