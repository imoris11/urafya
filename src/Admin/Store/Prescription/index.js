import React, { Component } from "react";
import Pagination from "../../../components/organisms/pagination";
import { Link } from "react-router-dom";
import ShowSearch from "../../../components/organisms/show_search";
import { connect } from "react-redux";
import selectors from "./redux/selectors";
import { fetchPrescriptions, toggleBan } from "./redux/actions";
import PropTypes from "prop-types";
import moment from "moment";
import FlatButton from "../../../components/atoms/FlatButton";

class Prescription extends Component {
  static propTypes = {
    fetchPrescriptions: PropTypes.func.isRequired,
    toggleBan: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    prescriptions: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const { prescriptions } = this.props;
    if (prescriptions.length > 0) return;
    this.props.fetchPrescriptions();
  }

  render() {
    const { isLoading, prescriptions, toggleBan } = this.props;
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Prescription</h1>
                </div>

                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Manage Prescription
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <ShowSearch />
                      {isLoading && (
                        <p className="text-info text-center">Loading</p>
                      )}
                      <table
                        className="table table-striped"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                      >
                        <thead className="thead-light">
                          <tr>
                            <th className="text-dark-100">Name</th>
                            <th className="text-dark-100">Type</th>
                            <th className="text-dark-100">Amount</th>
                            <th className="text-dark-100">Date Added</th>
                            <th className="text-dark-100">Status</th>
                            <th className="text-dark-100">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {prescriptions.map((presc) => (
                            <tr className="odd gradeX">
                              <td>{presc.name}</td>
                              <td>{presc.type}</td>
                              <td>KSh {presc.price}</td>
                              <td>{moment(presc.createdAt).format("lll")}</td>
                              <td>{presc.status}</td>
                              <td className="pa-0">
                                <FlatButton
                                  title="Ban"
                                  icon="fa fa-ban"
                                  onClick={() => toggleBan(presc._id)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPrescriptions: () => dispatch(fetchPrescriptions()),
    toggleBan: (id) => dispatch(toggleBan(id)),
  };
};
export default connect(selectors, mapDispatchToProps)(Prescription);
