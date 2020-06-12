import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { createCategory } from "../redux/actions";
import PropTypes from "prop-types";

export class NewCategory extends Component {
  static propTypes = {
    createCategory: PropTypes.func.isRequired,
    creatingCategory: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      category: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { category } = this.state;
    const data = {
      category,
    };
    this.props.createCategory(data);
  };

  render() {
    const { creatingCategory } = this.props;
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="modal-title">Add New Category </h5>
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
                        <label for="hname">Category:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="category"
                          name="category"
                          value={this.state.category}
                          onChange={this.handleChange}
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    {creatingCategory ? (
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
                          <i className="fas fa-fw fa-save"></i> Add Category
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
    creatingCategory: state.emergencyLines.creatingCategory || false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCategory: (payload) => dispatch(createCategory(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCategory);
