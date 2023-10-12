import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogin = () => {
    const { username, password } = this.state;
    // Replace 'apiEndpoint' with your actual API endpoint.
    axios.post('apiEndpoint/login', { username, password })
      .then((response) => {
        // Handle the successful login response here.
        console.log('Login successful', response.data);
      })
      .catch((error) => {
        this.setState({ error: 'Invalid username or password' });
      });
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
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
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button onClick={this.handleLogin}>Login</button>
          </div>
          {this.state.error && <p className="error-message">{this.state.error}</p>}
        </div>
      </div>
    );
  }
}

export default Login;