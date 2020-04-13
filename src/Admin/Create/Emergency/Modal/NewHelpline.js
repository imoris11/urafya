import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { createEmergency } from "../redux/actions";
import PropTypes from "prop-types";

export class NewHelplineModal extends Component {
  static propTypes = {
    createHelpline: PropTypes.func.isRequired,
    creatingHelpline: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hotline: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, hotline } = this.state;
    const data = {
      name,
      hotline,
    };
    this.props.createHelpline(data);
  };

  render() {
    const { creatingHelpline } = this.props;
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="modal-title">Add New Emergency Helpline </h5>
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
                        <label for="hname">Name:</label>
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
                      <div className="col-md-12 mb-15 pl-50">
                        <label for="pnum">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="hotline"
                          name="hotline"
                          value={this.state.hotline}
                          onChange={this.handleChange}
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    {creatingHelpline ? (
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
                        <i className="fas fa-fw fa-save"></i> Add Helpline
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
const mapStateToProps = (state) => {
  return {
    creatingHelpline: state.emergencyLines.creatingHelpline || false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createHelpline: (payload) => dispatch(createEmergency(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewHelplineModal);
