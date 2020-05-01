import React, { Component } from "react";
import Pagination from "../../../components/organisms/pagination";
import { Link } from "react-router-dom";
import ShowSearch from "../../../components/organisms/show_search";

class Consultants extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800"> Consultants</h1>
        </div>

        <div className="card shadow mb-4">
          <div className="mycard card border-left-primary shadow h-100 py-2">
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
                    <th className="text-dark-100">Patient Name</th>
                    <th className="text-dark-100">Age</th>
                    <th className="text-dark-100">Status</th>
                    <th className="text-dark-100">Action</th>
                  </thead>
                  <tbody>
                    <tr className="odd gradeX">
                      <td>
                        <Link
                          to="#"
                          style={{
                            pointerEvents: "none !important",
                            cursor: "default",
                            color: "Gray",
                          }}
                        >
                          <i
                            className="fa fa-folder-open pulse-button1"
                            style={{ color: "#eee" }}
                          ></i>
                        </Link>{" "}
                        Boniface Kemba
                      </td>
                      <td>33</td>
                      <td>Pending</td>
                      <td className="pa-0">
                        <form method="post" action="" name="buy" id="buy">
                          <button
                            type="submit"
                            className="btn btn-success circle action-button"
                          >
                            <i className="fa fa-check"></i> Accept
                          </button>
                          <input type="hidden" name="pcomp" value="Accepted" />
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
                        <Link to="/consultdetails">
                          <i
                            className="fa fa-folder-open pulse-button1"
                            style={{ color: "#e99239" }}
                          ></i>
                        </Link>{" "}
                        Boniface Kemba
                      </td>
                      <td>33</td>
                      <td>Accepted</td>
                      <td></td>
                    </tr>
                    <tr className="odd gradeX">
                      <td>
                        <Link to="/consultdetails">
                          <i
                            className="fa fa-folder-open pulse-button1"
                            style={{ color: "#e99239" }}
                          ></i>
                        </Link>{" "}
                        Boniface Kemba
                      </td>
                      <td>33</td>
                      <td>Evaluated</td>
                      <td></td>
                    </tr>
                    <tr className="odd gradeX">
                      <td>
                        <Link to="/consultdetails">
                          <i
                            className="fa fa-folder-open pulse-button1"
                            style={{ color: "#e99239" }}
                          ></i>
                        </Link>{" "}
                        Boniface Kemba
                      </td>
                      <td>33</td>
                      <td>Consult Started</td>
                      <td></td>
                    </tr>
                    <tr className="odd gradeX">
                      <td>
                        <Link to="/consultdetails">
                          <i
                            className="fa fa-folder-open pulse-button1"
                            style={{ color: "#e99239" }}
                          ></i>
                        </Link>{" "}
                        Boniface Kemba
                      </td>
                      <td>33</td>
                      <td>Diagnosed</td>
                      <td></td>
                    </tr>
                    <tr className="odd gradeX">
                      <td>
                        <Link to="/consultdetails">
                          <i
                            className="fa fa-folder-open pulse-button1"
                            style={{ color: "#e99239" }}
                          ></i>
                        </Link>{" "}
                        Boniface Kemba
                      </td>
                      <td>33</td>
                      <td>Prescription Sent</td>
                      <td></td>
                    </tr>
                    <tr className="odd gradeX">
                      <td>
                        <Link to="/consultdetails">
                          <i
                            className="fa fa-folder-open pulse-button1"
                            style={{ color: "#e99239" }}
                          ></i>
                        </Link>{" "}
                        Boniface Kemba
                      </td>
                      <td>33</td>
                      <td>Consultation Done</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Consultants;
