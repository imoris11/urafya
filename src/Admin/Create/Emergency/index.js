import React, { Component } from "react";
import Pagination from "../../../components/organisms/pagination";
import Button from "../../../components/atoms/Button";
import ShowSearch from "../../../components/organisms/show_search";
import NewHelplineModal from "./Modal/NewHelpline";
import selectors from "./redux/selectors";
import { connect } from "react-redux";
import { fetchEmergencyLines, deleteEmergencyLine } from "./redux/actions";
import FlatButton from "../../../components/atoms/FlatButton";

export class Emergency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  componentDidMount() {
    this.props.fetchEmergencyLines();
  }

  render() {
    const { emergencyLines, isLoading, errorLoading } = this.props;
    const { modalShow } = this.state;
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Emergency Helplines</h1>
          <Button
            onClick={() => this.setState({ modalShow: true })}
            title="New Helpline"
            showIcon={true}
            icon={"fas fa-comments fa-sm text-white-50"}
          />
          <NewHelplineModal
            show={modalShow}
            onHide={() => this.setState({ modalShow: false })}
          />
        </div>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Manage Helpline
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <ShowSearch />
              {isLoading && <p className="text-info">Loaing...</p>}
              {errorLoading && (
                <p className="text-danger">
                  Error fetching new hotlines, please try again.
                </p>
              )}
              <table
                className="table"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th className="text-dark-100">Name</th>
                    <th className="text-dark-100">Phone Number</th>
                    <th className="text-dark-100">USSD/Text Number</th>
                    <th className="text-dark-100">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {emergencyLines.map((emergency) => (
                    <tr key={emergency._id} className="odd gradeX">
                      <td>{emergency.name} </td>
                      <td>{emergency.hotline}</td>
                      <td>{emergency.hotline}</td>
                      <td className="pa-0">
                        <FlatButton
                          onClick={() =>
                            this.props.deleteEmergencyLine(emergency._id)
                          }
                          title="Remove"
                          icon="fa fa-trash"
                          className="btn btn-danger circle action-button"
                        />
                      </td>
                    </tr>
                  ))}
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmergencyLines: () => dispatch(fetchEmergencyLines()),
    deleteEmergencyLine: (id) => dispatch(deleteEmergencyLine(id)),
  };
};
export default connect(selectors, mapDispatchToProps)(Emergency);
