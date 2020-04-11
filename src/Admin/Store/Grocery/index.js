import React, { Component } from "react";
import Pagination from "../../../components/organisms/pagination";
import { Link } from "react-router-dom";
import ShowSearch from "../../../components/organisms/show_search";


class Grocery extends Component {
  render() {
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Grocery</h1>
                </div>

                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Manage Groceries
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <ShowSearch />

                      <table
                        className="table"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                      >
                        <thead>
                          <th className="text-dark-100">Name</th>
                          <th className="text-dark-100">Type</th>
                          <th className="text-dark-100">Amount</th>
                          <th className="text-dark-100">Date Added</th>
                          <th className="text-dark-100">Status</th>
                          <th className="text-dark-100">Actions</th>
                        </thead>
                        <tbody>
                          <tr className="odd gradeX">
                            <td>Vitamin B Shake</td>
                            <td>Protein Shake</td>
                            <td>KSh 3,000.00</td>
                            <td>24/06/2019 17:16</td>
                            <td>Approved</td>
                            <td className="pa-0">
                              <form
                                method="post"
                                action="<?php echo $editFormAction; ?>"
                                name="buy"
                                id="buy"
                              >
                                <button
                                  type="submit"
                                  className="btn btn-danger circle action-button"
                                >
                                  <i class="fa fa-ban"></i> Ban
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
                    <Pagination />
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
export default Grocery;
