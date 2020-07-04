import React, { Component } from "react";
import Pagination from "../../components/organisms/pagination";
import { Link } from "react-router-dom";
import ShowSearch from "../../components/organisms/show_search";

class DoctorsPrescription extends Component {
  render() {
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800"> Doctor's Prescription</h1>
                </div>

                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Doctor's Prescription
                    </h6>
                  </div>


                  <div className="mycard card border-left-primary shadow h-100 py-2">
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
                            <th className="text-dark-100">Patient Name</th>
                            <th className="text-dark-100">Age</th>
                            <th className="text-dark-100">No of Treatment Days</th>
                            <th className="text-dark-100">Status</th>
                          </thead>
                          <tbody>
                            <tr className="odd gradeX">
                              <td><Link to="#" style={{ pointerEvents: 'none !important', cursor: 'default', color: 'Gray' }} target="_blank"><i className="fa fa-folder-open pulse-button1" style={{ color: '#eee' }}></i></Link> Boniface Kemba</td>
                              <td>33</td>
                              <td>10</td>
                              <td>Pending Payment Payment</td>
                            </tr>

                            <tr className="odd gradeX">
                              <td><Link to="/pharmacist/prescriptiondetails" ><i className="fa fa-folder-open pulse-button1" style={{ color: '#e99239' }}></i></Link> Boniface Kemba</td>
                              <td>33</td>
                              <td>10</td>
                              <td>Paid</td>
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
        </div>

        <Link className="scroll-to-top rounded" to="/page-top">
          <i className="fas fa-angle-up"></i>
        </Link>
      </div>
    );
  }
}
export default DoctorsPrescription;
