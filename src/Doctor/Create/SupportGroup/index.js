import React, { Component } from "react";
import { Link } from "react-router-dom";


  class SupportGroup extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Support Groups</h1>
          <div className="mycard card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    General Support Group
                  </div>
                  <Link to="/doctor/generalsupport" className="btn-link">
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      <i className="fas fa-hand-point-right text-gray-300"></i>
                      Enter Group
                    </div>
                  </Link>
                </div>
                <div className="col-auto">
                  <i className="fas fa-door-open fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="d-flex justify-content-end">
          <Link className="text-gray-800" to="/doctor/support">
            My Support Groups
          </Link>
        </div>
        <div className="row">
          <div className="col-xl-6 col-md-6 col-sm-6 mb-4">
            <div className="mycard card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      AA
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      To help those who struggle with Alcohol
                    </div>
                  </div>
                  <div className="col-auto ">
                    <Link to="/doctor/groupdetails">
                      <i className="fas fa-door-closed pulse-button fa-2x text-gray-300"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 col-sm-6 mb-4">
            <div className="mycard card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Stroke Survivors
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      To help recovering stroke patients
                    </div>
                  </div>
                  <div className="col-auto">
                    <Link to="/doctor/groupdetails">
                      <i className="fas fa-door-closed pulse-button fa-2x text-gray-300"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br></br>
      </div>
    );
  }
}
export default SupportGroup;
