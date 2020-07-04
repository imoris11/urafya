import React, { Component } from "react";
import ShowSearch from "../../../components/organisms/show_search";
import Pagination from "../../../components/organisms/pagination";

class Payment extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Payments</h1>
          <div className="mycard card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    My Account
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    KSH5,840.00
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-money-bill fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Manage Payments
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <ShowSearch />

              <table
                className="table table-striped"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead className="thead-light">
                  <th className="text-dark-100">User</th>
                  <th className="text-dark-100">Reason</th>
                  <th className="text-dark-100">Amount</th>
                  <th className="text-dark-100">My Save</th>
                  <th className="text-dark-100">Date</th>
                  <th className="text-dark-100">Actions</th>
                </thead>
                <tbody>
                  <tr className="odd gradeX">
                    <td>Seun Odeyemi </td>
                    <td>Consultation</td>
                    <td>KSh 3,000.00</td>
                    <td>KSh 900.00</td>
                    <td>24/06/2019 17:16</td>
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
                    <td>Seun Odeyemi </td>
                    <td>Consultation</td>
                    <td>KSh 3,000.00</td>
                    <td>KSh 900.00</td>
                    <td>24/06/2019 17:16</td>
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
                    <td>Seun Odeyemi </td>
                    <td>Consultation</td>
                    <td>KSh 3,000.00</td>
                    <td>KSh 900.00</td>
                    <td>24/06/2019 17:16</td>
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
            <Pagination />
          </div>
        </div>
      </div>
    );
  }
}
export default Payment;
