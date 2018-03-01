import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../redux/reducer";
import UserPanel from "./LoginForm";
import createHistory from "history/createBrowserHistory";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    let { email, password } = this.state;

    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <div>
        <form className="form-signIn" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="formGroupExampleInput"
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })}
              value={email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="formGroupExampleInput2"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
              value={password}
            />
          </div>
          <div className="form-group">
            <input
              className="signInBtn"
              type="submit"
              id="formGroupExampleInput3"
              value="SignIn"
            />
          </div>
          {isLoginPending && <div> Please wait... </div>}
          {isLoginSuccess && (
            <div>{this.props.history.push("/userpanel")} </div>
          )}
          {loginError && <div> {loginError.message} </div>}
        </form>
      </div>
    );
  }
  onSubmit = e => {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: "",
      password: ""
    });
  };
}
const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
