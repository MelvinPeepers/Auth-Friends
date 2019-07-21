import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { login } from "../../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  changeHandle = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials).then(response => {
      if (response) {
        this.props.history.push("/protected");
      }
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className='login-form'>
        <h1>Login Form</h1>
        <form onSubmit={this.login}>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={username}
            onChange={this.changeHandle}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={this.changeHandle}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.logginIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
