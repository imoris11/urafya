import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { createSymptoms } from "../redux/actions";
import PropTYpes from "prop-types";

export class NewSymptomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symptom: "",
      symptoms: [],
    };
  }

  static propTypes = {
    createSymptoms: PropTYpes.func.isRequired,
    creatingSymptom: PropTYpes.bool.isRequired,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { symptoms, symptom } = this.state;
    if (symptom !== "") symptoms.push(symptom);
    const data = {
      symptom: symptoms,
    };
    this.props.createSymptoms(data);
  };

  addSymptom = (e) => {
    e.preventDefault();
    const { symptoms, symptom } = this.state;
    if (symptom && symptom !== "") {
      symptoms.push(symptom);
      this.setState({ symptoms, symptom: "" });
    }
  };
  render() {
    const { symptoms } = this.state;
    const { creatingSymptom } = this.props;
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="modal-title">Add New Symptom </h5>
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
                        <label for="name">Symptom:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="symptom"
                          placeholder=""
                          value={this.state.symptom}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={this.addSymptom}
                    className="btn"
                    id="btnreg"
                    name="btnreg"
                  >
                    Add Another
                  </button>
                  {symptoms.map((symptom, idx) => (
                    <p key={idx} className="text-info">
                      {symptom}
                    </p>
                  ))}
                  <br />
                  <div className="d-flex">
                    {creatingSymptom ? (
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
                        <i className="fas fa-fw fa-save"></i> Save
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
    createSymptoms: (payload) => dispatch(createSymptoms(payload)),
  };
};
const mapStateToProps = (state) => {
  return {
    creatingSymptom: state.symptoms.creatingSymptom || false,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewSymptomModal);
