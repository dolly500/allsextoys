import React, { Component } from 'react';
import './Signin.css'

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here, send a request to your backend
  }

  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
