import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button";
import EditUserModal from "./Modal/EditUser";
import ChangePasswordModal from "./Modal/ChangePassword";
import { connect } from "react-redux";
import { getUser } from "../../Authenication/redux/selectors";
import PropTypes from "prop-types";

export class Profile extends Component {
  state = {
    modalShow: false,
    modalShow2: false,
  };

  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  render() {
    const { modalShow2, modalShow } = this.state;
    const { user } = this.props;
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Profile</h1>
                  <Button
                    onClick={() => this.setState({ modalShow: true })}
                    title="Edit Personal Information"
                    showIcon={true}
                    icon={"fas fa-pencil-alt fa-sm text-white-50"}
                  />
                  <EditUserModal
                    show={modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                  />
                </div>

                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Manage Profile
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-3 col-md-6 mb-4">
                        <div className="mycard card border-left-success shadow py-2">
                          <img
                            src={user.biodata.general.imageUri}
                            className="card-img-top"
                            alt="user"
                          />
                        </div>
                      </div>
                      <div className="col-xl-9 col-md-6">
                        <p>
                          <b className="text-primary">Fullname:</b>{" "}
                          {user.fullname}
                          <br></br>
                          <b className="text-primary">Position:</b> {user.role}
                          <br></br>
                          <b className="text-primary">Gender:</b> {user.gender}
                          <br></br>
                          <b className="text-primary">Date of Birth:</b>{" "}
                          {user.dob}
                          <br></br>
                          <b className="text-primary">Email:</b> {user.email}
                          <br></br>
                          <b className="text-primary">Phone Number:</b>{" "}
                          {user.phoneNumber}
                          <br></br>
                          <b className="text-primary">
                            National ID Number:
                          </b>{" "}
                          {user.nationalId}
                          <br></br>
                          <b className="text-primary">Address:</b>{" "}
                          {user.address}
                          <br></br>
                          <b className="text-primary">Date Registered:</b>{" "}
                          {user.dateRegistered}
                          <br></br>
                        </p>

                        <Button
                          onClick={() => this.setState({ modalShow2: true })}
                          title="Change Password"
                          showIcon={true}
                          icon={"fas fa-key fa-sm text-white-50"}
                        />
                        <ChangePasswordModal
                          show={modalShow2}
                          onHide={() => this.setState({ modalShow2: false })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link className="scroll-to-top rounded" to="/page-top">
          <i className="fas fa-angle-up"></i>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  };
};
export default connect(mapStateToProps)(Profile);
