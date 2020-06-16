import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { forgotPassword } from "../redux/actions";
import { sendingResetEmail, resetEmailSent } from "../redux/selectors";
import { connect } from "react-redux";
export class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const payload = {
      email,
    };
    this.props.sendResetEmail(payload);
  };
  render() {
    const { sendingResetEmail, resetEmailSent } = this.props;
    return (
      <div className="mynewbg" style={{ minHeight: "100vh" }}>
        <div className="container loginspace">
          <img alt="logo" src={Logo} className="logosize" />{" "}
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
              <h4>Recover Password</h4>
              <div className="myline"></div>
              <br />
              <form className="myinput" onSubmit={this.submitForm} role="form">
                <div className="form-group">
                  <label for="email">Email address:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="uemail"
                    onChange={this.handleChange}
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <br />

                {sendingResetEmail ? (
                  <button
                    type="submit"
                    id="btnsub"
                    disabled
                    name="btnsub"
                    className="btn btn-primary mybtn btn-block btn-lg"
                  >
                    Sending reset email...
                  </button>
                ) : (
                    <button
                      type="submit"
                      id="btnsub"
                      name="btnsub"
                      className="btn btn-primary mybtn btn-block btn-lg"
                    >
                      Submit
                    </button>
                  )}
                {resetEmailSent && (
                  <p>
                    Password reset instructions have been sent to the email
                    provided.
                  </p>
                )}
                <div className="row mylinks mx-auto">
                  <Link to="/" className=" mx-auto">
                    Login
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

const mapStateToProps = (state) => {
  return {
    sendingResetEmail: sendingResetEmail(state),
    resetEmailSent: resetEmailSent(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendResetEmail: (payload) => dispatch(forgotPassword(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
