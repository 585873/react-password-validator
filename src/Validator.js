import React, { Component } from 'react';
import "./Validator.css";


class Validator extends Component {
  constructor(props) {
    super()
    this.state = {
      email: "",
      password: "",
      validator: ""
    };
    this.validEmail = this.validEmail.bind(this);
    this.validPassword = this.validPassword.bind(this);
    this.validValidator = this.validValidator.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validEmail(e) {
    this.setState({email: e.target.value})
  }

  validPassword(e) {
    this.setState({password: e.target.value})
  }

  validValidator(e) {
    this.setState({validator: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.state.password === this.state.validator) {
      alert("You are logged In!");
    } else {
      alert("Login Failed");
    };
  }

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <h1>Sign Up</h1>
      <input type="text" value={this.state.email} placeholder="Enter Email" onChange={this.validEmail}/>
      <input type="password" value={this.state.password} placeholder="Enter Password" onChange={this.validPassword} />
      <input type="password" value={this.state.validator} placeholder="Re-Enter Password" onChange={this.validValidator}/>
      <input type="submit" value="Submit" />
      </form>
      );
    }
}
export default Validator;
