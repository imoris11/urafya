import React, { Component } from "react";
import Pagination from "../../../components/organisms/pagination";
import { Link } from "react-router-dom";
import ShowSearch from "../../../components/organisms/show_search";
import { connect } from "react-redux";
import selectors from "./redux/selectors";
import { fetchConsultations } from "./redux/actions";
import PropTypes from "prop-types";
import moment from "moment";

class Consultants extends Component {
  static propTypes = {
    fetchConsultations: PropTypes.func.isRequired,
    consultations: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorLoading: PropTypes.bool.isRequired,
  };
  componentDidMount() {
    const { consultations } = this.props;
    if (consultations.length > 0) return;
    this.props.fetchConsultations();
  }
  getAge = (dob) => {
    const birthYear = dob.split("-")[0];
    const currentYear = new Date().getFullYear();
    return currentYear - Number(birthYear);
  };
  render() {
    const { isLoading, consultations } = this.props;
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
                    {consultations.map((consult) => (
                      <tr key={consult._id} className="odd gradeX">
                        <td>
                          {consult.patient.biodata.general.firstName}{" "}
                          {consult.patient.biodata.general.lastName}
                        </td>
                        <td>
                          {this.getAge(consult.patient.biodata.general.dob)}
                        </td>
                        <td>{consult.patient.gender}</td>
                        <td>{moment(consult.dateCreated).format("lll")}</td>
                        <td>{consult.dStatus}</td>
                        <td className="pa-0">
                          <Link
                            className="btn btn-success circle action-button"
                            to={"/consultdetails/" + consult._id}
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
    fetchConsultations: () => dispatch(fetchConsultations()),
  };
};
export default connect(selectors, mapDispatchToProps)(Consultants);
