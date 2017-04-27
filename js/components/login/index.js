import React, { Component } from 'react';

class Login extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      username: '',
      pass: ''
    };

    this.changeInput = this.changeInput.bind(this);
    this.login = this.login.bind(this);
  }
  changeInput(field) {
    return event => {
      const { value } = event.target;

      this.setState({ [field]: value });
    };
  }
  login(e) {
    e.preventDefault();
    const { username, pass } = this.state;

    if (username && pass) {
      this.props.login({ username, pass });
    }
  }
  render() {
    return (
      <div >
        <div>
          <input placeholder="username"
                 onChange={ this.changeInput('username') }
                 type="text" />
        </div>
        <div>
          <input placeholder="password"
                 onChange={ this.changeInput('pass') }
                 type="password" />
        </div>
        <div>
          <input onClick={ this.login } type="submit" />
        </div>
      </div>
    );
  }
}

export default Login;
