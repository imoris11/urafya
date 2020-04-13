import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { createTaxi } from "../redux/actions";
import PropTypes from "prop-types";

export class NewTaxiModal extends Component {
  static propTypes = {
    createTaxi: PropTypes.func.isRequired,
    creatingTaxi: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      hospitalName: "",
      about: "",
      avatar: {},
    };
  }

  handleFileChange = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let data = { ...this.state };
    const formData = new FormData();
    for (let name in data) {
      formData.append(name, data[name]);
    }
    this.props.createTaxi(formData);
  };

  render() {
    const { creatingTaxi } = this.props;
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="modal-title">Add New Taxi Service </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body" id="orderDetails">
            <div className="card shadow mb-4">
              <div className="card-body">
                <form
                  className=""
                  method="POST"
                  action=""
                  id="regform"
                  name="regform"
                  enctype="multipart/form-data"
                  onSubmit={this.handleSubmit}
                >
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pr-50">
                        <label htmlFor="tname">Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleChange}
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pr-50">
                        <label htmlFor="tname">Hostpital Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="hospitalName"
                          value={this.state.hospitalName}
                          onChange={this.handleChange}
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pr-50">
                        <label htmlFor="tname">About</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="about"
                          value={this.state.about}
                          onChange={this.handleChange}
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                        <label htmlFor="pnum">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          name="phoneNumber"
                          placeholder=""
                          value={this.state.phoneNumber}
                          onChange={this.handleChange}
                          required
                        />
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
                              name="avatar"
                              id="avatar"
                              onChange={this.handleFileChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div className="d-flex">
                    {creatingTaxi ? (
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
                        <i className="fas fa-fw fa-save"></i> Add Taxi Service
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            onClick={this.props.onHide}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTaxi: (payload) => dispatch(createTaxi(payload)),
  };
};
const mapStateToProps = (state) => {
  return {
    creatingTaxi: state.taxis.creatingTaxi || false,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewTaxiModal);
