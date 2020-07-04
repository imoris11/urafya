import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/atoms/Button";
import NewSymptomModal from "./Modal/NewSymptom";
import { connect } from "react-redux";
import selectors from "./redux/selectors";
import PropTypes from "prop-types";
import { fetchSymptoms, deleteSymptom } from "./redux/actions";
import FlatButton from "../../../components/atoms/FlatButton";
export class Symptoms extends Component {
  state = {
    modalShow2: false,
    modalShow: false,
  };

  static propTypes = {
    fetchSymptoms: PropTypes.func.isRequired,
    symptoms: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorLoading: PropTypes.bool.isRequired,
    deleteSymptom: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { symptoms } = this.props;
    if (symptoms.length > 0) return;
    this.props.fetchSymptoms();
  }
  render() {
    const { modalShow } = this.state;
    const { isLoading, symptoms } = this.props;
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Symptoms</h1>
                  <Button
                    onClick={() => this.setState({ modalShow: true })}
                    title="New Symptoms"
                    showIcon={true}
                    icon={"fas fa-pencil-alt fa-sm text-white-50"}
                  />
                  <NewSymptomModal
                    show={modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                  />
                </div>

                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Manage Symptoms
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <div
                            className="dataTables_length"
                            id="dataTable_length"
                          >
                            <label>
                              Show
                              <select
                                name="dataTable_length"
                                aria-controls="dataTable"
                                className="custom-select custom-select-sm form-control form-control-sm"
                              >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                              </select>{" "}
                              entries
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div
                            id="dataTable_filter"
                            className="dataTables_filter"
                          >
                            <label>
                              Search:
                              <input
                                type="search"
                                className="form-control form-control-sm"
                                placeholder=""
                                aria-controls="dataTable"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      {isLoading && (
                        <p className="text-info text-center">Loading</p>
                      )}
                      <table
                        className="table table-striped"
                        id="dataTable"
                        width="100%"
                        cellSpacing="0"
                      >
                        <thead className="thead-light">
                          <tr>
                            <th className="text-dark-100">Name</th>
                            <th className="text-dark-100">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {symptoms.map((symptom) => (
                            <tr key={symptom._id} className="odd gradeX">
                              <td>
                                <div className="btn btn-link circle action-button ml-15 mr-10">
                                  <i className="fa fa-eye"></i>
                                </div>
                                {symptom.symptom}
                              </td>
                              <td className="pa-0">
                                <FlatButton
                                  className="btn btn-danger circle action-button"
                                  icon="fa fa-trash"
                                  onClick={() =>
                                    this.props.deleteSymptom(symptom._id)
                                  }
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-5">
                        <div
                          className="dataTables_info"
                          id="dataTable_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 10 of 13 entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="dataTable_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="dataTable_previous"
                            >
                              <Link
                                to="#"
                                aria-controls="dataTable"
                                data-dt-idx="0"
                                tabindex="0"
                                className="page-link"
                              >
                                Previous
                              </Link>
                            </li>
                            <li className="paginate_button page-item active">
                              <Link
                                to="#"
                                aria-controls="dataTable"
                                data-dt-idx="1"
                                tabindex="0"
                                className="page-link"
                              >
                                1
                              </Link>
                            </li>
                            <li className="paginate_button page-item ">
                              <Link
                                to="#"
                                aria-controls="dataTable"
                                data-dt-idx="2"
                                tabindex="0"
                                className="page-link"
                              >
                                2
                              </Link>
                            </li>
                            <li
                              className="paginate_button page-item next"
                              id="dataTable_next"
                            >
                              <Link
                                to="#"
                                aria-controls="dataTable"
                                data-dt-idx="3"
                                tabindex="0"
                                className="page-link"
                              >
                                Next
                              </Link>
                            </li>
                          </ul>
                        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSymptoms: () => dispatch(fetchSymptoms()),
    deleteSymptom: (id) => dispatch(deleteSymptom(id)),
  };
};

export default connect(selectors, mapDispatchToProps)(Symptoms);
