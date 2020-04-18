import React, { Component } from "react";
import Footer from "../../../components/organisms/footer";
import { Link } from "react-router-dom";
import Button from "../../../components/atoms/Button";
import NewGroupModal from "./Modal/NewGroup";
import ViewGroupModal from "./Modal/ViewGroup";

export default class Support extends Component {
  state = {
    modalShow: false,
    modalShow2: false,
  };

  render() {
    const { modalShow2, modalShow } = this.state;
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Support Groups</h1>
                  <Button
                    onClick={() => this.setState({ modalShow: true })}
                    title="New Group"
                    showIcon={true}
                    icon={"fas fa-comments fa-sm text-white-50"}
                  />
                  <NewGroupModal
                    show={modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                  />
                </div>

                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Manage Support Groups
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
                        cellSpacing="0"
                      >
                        <thead>
                          <tr>
                            <th className="text-dark-100">Name</th>
                            <th className="text-dark-100">Admin</th>
                            <th className="text-dark-100">Price</th>
                            <th className="text-dark-100">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="odd gradeX">
                            <td>
                              <div
                                className="btn btn-link circle action-button ml-15 mr-10"
                                onClick={() =>
                                  this.setState({ modalShow2: true })
                                }
                              >
                                <i className="fa fa-eye"></i>
                              </div>{" "}
                              <ViewGroupModal
                                show={modalShow2}
                                onHide={() =>
                                  this.setState({ modalShow2: false })
                                }
                              />
                              AA{" "}
                            </td>
                            <td>Doctor - Diamond Rihanna</td>
                            <td>KSh 2,500.00</td>
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

                          <tr className="odd gradeX">
                            <td>
                              <a
                                className="btn btn-link circle action-button ml-15 mr-10"
                                href=""
                              >
                                <i className="fa fa-eye"></i>
                              </a>{" "}
                              AA{" "}
                            </td>
                            <td>Doctor - Diamond Rihanna</td>
                            <td>KSh 2,500.00</td>
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

                          <tr className="odd gradeX">
                            <td>
                              <a
                                className="btn btn-link circle action-button ml-15 mr-10"
                                href=""
                              >
                                <i className="fa fa-eye"></i>
                              </a>{" "}
                              AA{" "}
                            </td>
                            <td>Doctor - Diamond Rihanna</td>
                            <td>KSh 2,500.00</td>
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
            <Footer />
          </div>
        </div>

        <Link className="scroll-to-top rounded" to="/page-top">
          <i className="fas fa-angle-up"></i>
        </Link>
      </div>
    );
  }
}
