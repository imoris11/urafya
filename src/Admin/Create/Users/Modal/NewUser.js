import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { createUser } from "../redux/actions";
import FlatButton from "../../../../components/atoms/FlatButton";

export class NewUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      firstName: "",
      userName: "",
      lastName: "",
      gender: "",
      dob: "",
      phoneNumber: "",
      email: "",
      nationalId: "",
      address: "",
      imageUri: "",
      speciality: "N.A",
      details: "N.A",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleFileChange = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let data = { ...this.state };
    data["displayName"] = `${data.firstName} ${data.lastName}`;
    const formData = new FormData();
    for (let name in data) {
      formData.append(name, data[name]);
    }

    this.props.createUser(formData);
  };

  render() {
    const { creatingUser } = this.props;
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="modal-title">Add New User's Detail </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body" id="orderDetails">
            <div className="card shadow mb-4">
              <div className="card-body">
                <form
                  id="regform"
                  name="regform"
                  encType="multipart/form-data"
                  onSubmit={this.handleSubmit}
                >
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                        <label htmlFor="gen">User Type/Position</label>
                        <select
                          className="form-control"
                          name="role"
                          id="role"
                          value={this.state.role}
                          onChange={this.handleChange}
                        >
                          <option className="pl-20" value="">
                            --Select--
                          </option>
                          <option value="admin">Admin</option>
                          <option value="doctor">Doctor</option>
                          <option value="pharmacist">Pharmacist</option>
                          <option value="grocery">Grocery Seller</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-6 mb-15 pr-50">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          placeholder="e.g. John"
                          required
                          value={this.state.firstName}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-md-6 mb-15 px-25">
                        <label htmlFor="mname">User Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="userName"
                          name="userName"
                          placeholder="e.g. Martin"
                          required
                          value={this.state.userName}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-6 mb-15 pl-50">
                        <label htmlFor="lastName">Surname:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          placeholder="e.g. Doe"
                          value={this.state.lastName}
                          required
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-md-6 mb-15 pl-50">
                        <label htmlFor="gen">Gender</label>
                        <select
                          className="form-control"
                          name="gender"
                          id="gender"
                          value={this.state.gender}
                          onChange={this.handleChange}
                        >
                          <option className="pl-20" value="">
                            --Select--
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-6 mb-15 pr-50">
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                          type="date"
                          className="form-control"
                          id="dob"
                          name="dob"
                          required
                          value={this.state.dob}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-md-6 mb-15 pl-50">
                        <label htmlFor="pnum">Phone Number:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="e.g. +254XXXXXXXX"
                          required
                          value={this.state.phoneNumber}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-6 mb-15 px-25">
                        <label htmlFor="uemail">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="e.g. johnmartindoe@gmail.com"
                          required
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-md-6 mb-15 pr-50">
                        <label htmlFor="nationalId">
                          National ID Card Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="nationalId"
                          id="nationalId"
                          placeholder="e.g xxxxxxxx"
                          required
                          value={this.state.nationalId}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                        <label htmlFor="addy">Address</label>
                        <textarea
                          rows="3"
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          placeholder="Enter Residential/Office Address"
                          required
                          onChange={this.handleChange}
                          value={this.state.address}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                        <div className="row">
                          <div className="col-md-8">
                            Select Image
                            <input
                              type="file"
                              className="upload"
                              name="imageUri"
                              id="imageUri"
                              onChange={this.handleFileChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div className="d-flex">
                    {creatingUser ? (
                      <button
                        disabled
                        className="btn btn-primary mybtn"
                        id="btnreg"
                        name="btnreg"
                      >
                        Creating...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-primary mybtn"
                        id="btnreg"
                        name="btnreg"
                      >
                        <i className="fas fa-fw fa-door-open"></i> Add User
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <small>Default Password: UR12345</small>
          <FlatButton
            title="Close"
            onClick={this.props.onHide}
            className="btn btn-secondary"
          />
        </Modal.Footer>
      </Modal>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (payload) => dispatch(createUser(payload)),
  };
};
const mapStateToProps = (state) => {
  return {
    userHasBeenCreated: state.allUsers.userHasBeenCreated,
    creatingUser: state.allUsers.creatingUser,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewUserModal);
