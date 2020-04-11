import React, { Component } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../redux/actions";
import PropTypes from "prop-types";
import selectors from "../redux/selectors";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    loggedInError: PropTypes.bool.isRequired,
    loggingIn: PropTypes.bool.isRequired,
    loginAPI: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,
    loggedInError: false,
    loggingIn: false,
    loginAPI: () => {},
  };
  submitForm = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const payload = {
      email,
      password,
    };
    this.props.loginAPI(payload);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    console.log(this.props);
    return (
      <div className="mynewbg" style={{ minHeight: "100vh" }}>
        <div className="container loginspace">
          <img src={Logo} className="logosize" />{" "}
          <label className="whitetext">
            <b>UR AFYA</b>
          </label>
          <div className="row rowspace">
            <div className="col-sm-7">
              <h1 className="largeheading">
                Your health
                <br></br>is our
                <br />
                concern
              </h1>
            </div>
            <div className="col-sm-4 whitetext">
              <h4>Let's begin</h4>
              <div className="myline"></div>
              <br />
              <form className="myinput" onSubmit={this.submitForm} role="form">
                <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="uemail"
                    onChange={this.handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    name="password"
                    onChange={this.handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {this.props.loggedInError && (
                  <p className="text-warning">
                    Invalid Email/Password combination
                  </p>
                )}
                <br />
                {this.props.loggingIn ? (
                  <button
                    type="submit"
                    id="btnsub"
                    disabled
                    name="btnsub"
                    className="btn btn-primary mybtn btn-block btn-lg"
                  >
                    Logging in...
                  </button>
                ) : (
                  <button
                    type="submit"
                    id="btnsub"
                    name="btnsub"
                    className="btn btn-primary mybtn btn-block btn-lg"
                  >
                    Login
                  </button>
                )}

                <div className="row mylinks mx-auto">
                  <Link to="/forgetpassword" className=" mx-auto">
                    Forgot password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAPI: (payload) => dispatch(login(payload)),
  };
};
export default connect(selectors, mapDispatchToProps)(Login);
