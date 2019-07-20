import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;
    this.props
      .login(username, password)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className='login-form'>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={username}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={this.handleChange}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
