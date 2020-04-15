import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/atoms/Button";
import NewSymptomModal from "./Modal/NewSymptom";
import ViewSymptomModal from "./Modal/ViewSymptom";

export default function Symptoms(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  return (
    <div id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Symptoms</h1>
                <Button
                  onClick={() => setModalShow(true)}
                  title="New Symptoms"
                  showIcon={true}
                  icon={"fas fa-pencil-alt fa-sm text-white-50"}
                />
                <NewSymptomModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
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

                    <table
                      className="table"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                    >
                      <thead>
                        <th className="text-dark-100">Name</th>
                        <th className="text-dark-100">Body Part</th>
                        <th className="text-dark-100">Actions</th>
                      </thead>
                      <tbody>
                        <tr className="odd gradeX">
                          <td>
                            <div
                              className="btn btn-link circle action-button ml-15 mr-10"
                              onClick={() => setModalShow2(true)}
                            >
                              <i className="fa fa-eye"></i>
                            </div>{" "}
                            <ViewSymptomModal
                              show={modalShow2}
                              onHide={() => setModalShow2(false)}
                            />
                            Sharp Pain{" "}
                          </td>
                          <td>Shoulder - Left</td>
                          <td className="pa-0">
                            <form method="post" action="" name="buy" id="buy">
                              <button
                                type="submit"
                                className="btn btn-danger circle action-button"
                              >
                                <i className="fa fa-trash"></i> Remove
                              </button>
                              <input
                                name="buyalbum"
                                type="hidden"
                                id="buyalbum"
                                value=""
                              />
                            </form>
                          </td>
                        </tr>
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
