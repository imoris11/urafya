import React, { Component } from "react";

class GeneralGroup extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">General Support Group</h1>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              View all Comments
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">Chat</div>
          </div>
        </div>
      </div>
    );
  }
}
export default GeneralGroup;
