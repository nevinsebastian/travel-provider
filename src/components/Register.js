import React, { Component } from 'react';
import './Login.css';



class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRegister = () => {
    const { username, email, password } = this.state;
    // You can add code here to register the user, such as making an API request.
    // Replace this with your actual registration logic.

    console.log('Registration Info:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-form">
          <h2>Register</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button onClick={this.handleRegister}>Register</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;