import React, { Component } from "react";
import Pagination from "../../../components/organisms/pagination";
import { Link } from "react-router-dom";
import ShowSearch from "../../../components/organisms/show_search";
import { connect } from "react-redux";
import selectors from "./redux/selectors";
import { fetchAppointments } from "./redux/actions";
import PropTypes from "prop-types";
import moment from "moment";

class Appointments extends Component {
  static propTypes = {
    fetchAppointments: PropTypes.func.isRequired,
    appointments: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorLoading: PropTypes.bool.isRequired,
  };
  componentDidMount() {
    const { appointments } = this.props;
    if (appointments.length > 0) return;
    this.props.fetchAppointments();
  }
  getAge = (dob) => {
    const birthYear = dob && dob.split("-")[0];
    const currentYear = new Date().getFullYear();
    return currentYear - Number(birthYear);
  };
  render() {
    const { isLoading, appointments } = this.props;
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800"> Appointments</h1>
        </div>

        <div className="card shadow mb-4">
          <div className="mycard card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="table-responsive">
                <ShowSearch />
                {isLoading && (
                  <p className="text-info text-center">Loading...</p>
                )}
                <table
                  className="table"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th className="text-dark-100">Patient Name</th>
                      <th className="text-dark-100">Age</th>
                      <th className="text-dark-100">Gender</th>
                      <th className="text-dark-100">Date Created</th>
                      <th className="text-dark-100">Status</th>
                      <th className="text-dark-100">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appointment) => (
                      <tr key={appointment._id} className="odd gradeX">
                        <td>
                          {appointment.patient.biodata.general.firstName}{" "}
                          {appointment.patient.biodata.general.lastName}
                        </td>
                        <td>
                          {this.getAge(appointment.patient.biodata.general.dob)}
                        </td>
                        <td>{appointment.patient.gender}</td>
                        <td>{moment(appointment.dateCreated).format("lll")}</td>
                        <td>{appointment.status}</td>
                        <td className="pa-0">
                          <Link
                            className="btn btn-success circle action-button"
                            to={"/appointment-details/" + appointment._id}
                          >
                            Open File
                          </Link>
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
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAppointments: () => dispatch(fetchAppointments()),
  };
};
export default connect(selectors, mapDispatchToProps)(Appointments);
