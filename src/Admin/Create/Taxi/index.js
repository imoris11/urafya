import React, { Component } from "react";
import Pagination from "../../../components/organisms/pagination";
import { Link } from "react-router-dom";
import ShowSearch from "../../../components/organisms/show_search";
import Button from "../../../components/atoms/Button";
import NewTaxiModal from "./Modal/NewTaxi";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import selectors from "./redux/selectors";
import { fetchTaxis, deleteTaxis } from "./redux/actions";
import FlatButton from "../../../components/atoms/FlatButton";

export class TaxiServices extends Component {
  state = {
    modalShow: false,
  };

  static propTypes = {
    taxis: PropTypes.array,
    isLoading: PropTypes.bool,
    errorLoading: PropTypes.bool,
    fetchTaxies: PropTypes.func,
  };

  static defaultProps = {
    taxis: [],
    isLoading: false,
    errorLoading: false,
  };
  componentDidMount() {
    const { taxis } = this.props;
    if (taxis.length > 0) return;
    this.props.fetchTaxies();
  }
  render() {
    const { modalShow } = this.state;
    const { isLoading, errorLoading, taxis } = this.props;
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Taxi Services</h1>
                  <Button
                    onClick={() => this.setState({ modalShow: true })}
                    title="New Taxi"
                    showIcon={true}
                    icon={"fas fa-taxi fa-sm text-white-50"}
                  />
                  <NewTaxiModal
                    show={modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                  />
                </div>

                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Manage Taxi Services
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <ShowSearch />
                      {isLoading && (
                        <p className="text-center text-info">Loading...</p>
                      )}
                      <table
                        className="table"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                      >
                        <thead>
                          <tr>
                            <th className="text-dark-100">Name</th>
                            <th className="text-dark-100">Phone Number</th>
                            <th className="text-dark-100">Hospital Name</th>
                            <th className="text-dark-100">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {taxis.map((taxi) => (
                            <tr key={taxi._id} className="odd gradeX">
                              <td>{taxi.name}</td>
                              <td>{taxi.phoneNumber}</td>
                              <td>{taxi.hospitalName}</td>
                              <td className="pa-0">
                                <FlatButton
                                  icon="fa fa-trash"
                                  onClick={() =>
                                    this.props.deleteTaxi(taxi._id)
                                  }
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
    fetchTaxies: () => dispatch(fetchTaxis()),
    deleteTaxi: (id) => dispatch(deleteTaxis(id)),
  };
};

export default connect(selectors, mapDispatchToProps)(TaxiServices);
