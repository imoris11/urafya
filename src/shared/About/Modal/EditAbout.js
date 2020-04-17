import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { updateAbout } from "../redux/actions";

export class EditAboutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutUs: "",
      termsAndCondition: "",
      helpAndSupport: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { aboutUs, termsAndCondition, helpAndSupport } = this.state;
    const data = {
      aboutUs,
      termsAndCondition,
      helpAndSupport,
    };
    console.log(data);
    this.props.updateAbout(data);
  };

  componentWillReceiveProps(props) {
    this.setState({
      aboutUs: props.about.aboutUs,
      termsAndCondition: props.about.termsAndCondition,
      helpAndSupport: props.about.helpAndSupport,
    });
  }
  render() {
    const { updatingAbout } = this.props;
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="modal-title">About - Add General Information </h5>
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
                        <label for="adesc">About - Description</label>
                        <textarea
                          rows="3"
                          type="text"
                          className="form-control"
                          name="aboutUs"
                          id="description"
                          value={this.state.aboutUs}
                          onChange={this.handleChange}
                          placeholder=""
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                        <label for="tdesc">About - Terms & Conditions</label>
                        <textarea
                          rows="3"
                          type="text"
                          className="form-control"
                          name="termsAndCondition"
                          id="condition"
                          value={this.state.termsAndCondition}
                          onChange={this.handleChange}
                          placeholder=""
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                        <label for="ahelp">About - Help & Support</label>
                        <textarea
                          rows="3"
                          type="text"
                          className="form-control"
                          name="helpAndSupport"
                          id="support"
                          value={this.state.helpAndSupport}
                          onChange={this.handleChange}
                          placeholder=""
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div className="d-flex">
                    {updatingAbout ? (
                      <button
                        disabled
                        className="btn btn-primary mybtn"
                        id="btnreg"
                        name="btnreg"
                      >
                        Updating...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-primary mybtn"
                        id="btnreg"
                        name="btnreg"
                      >
                        <i className="fas fa-fw fa-file-archive"></i> Update
                        Information
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
    updatingAbout: state.appInfo.updatingAbout || false,
    about: state.appInfo.about,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAbout: (payload) => dispatch(updateAbout(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditAboutModal);
