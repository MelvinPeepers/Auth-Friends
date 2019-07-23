import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions";

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
    this.props.login(username, password);
  };

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={this.handleChange}
        />
        <br />
        <input
          type='text'
          name='password'
          placeholder='Password'
          value={password}
          onChange={this.handleChange}
        />
        <br />
        <button type='submit'>Login</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  login: login
};

export default connect(
  null, //mapStateToProps,
  mapDispatchToProps
)(Login);
