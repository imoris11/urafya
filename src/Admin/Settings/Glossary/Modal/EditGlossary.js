import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateWord } from "../redux/actions";
export class EditGlossaryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
    };
  }

  static propTypes = {
    updateWord: PropTypes.func.isRequired,
    updatingWord: PropTypes.bool.isRequired,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentWillReceiveProps(props) {
    this.setState({
      name: props.word.name,
      description: props.word.description,
      id: props.word._id,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, id } = this.state;
    const payload = {
      data: {
        name,
        description,
      },
      id,
    };
    this.props.updateWord(payload);
  };

  render() {
    const { updatingWord } = this.props;
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="modal-title">Edit Glossary Information</h5>
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
                        <label for="tname">Name</label>
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
                        <label for="tdesc">Description</label>
                        <textarea
                          rows="3"
                          type="text"
                          className="form-control"
                          name="description"
                          id="description"
                          value={this.state.description}
                          onChange={this.handleChange}
                          placeholder=""
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div className="d-flex">
                    {updatingWord ? (
                      <button
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
                        <i className="fas fa-fw fa-file"></i> Edit Term
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
    updatingWord: state.glossary.updatingWord || false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateWord: (payload) => dispatch(updateWord(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditGlossaryModal);
