import React, { Component } from "react";
import Pagination from "../../../components/organisms/pagination";
import { Link } from "react-router-dom";
import ShowSearch from "../../../components/organisms/show_search";
import { connect } from "react-redux";
import selectors from "./redux/selectors";
import { fetchGroceries, toggleBanGrocery } from "./redux/actions";
import PropTypes from "prop-types";
import FlatButton from "../../../components/atoms/FlatButton";
import moment from "moment";

class Grocery extends Component {
  static propTyoes = {
    groceries: PropTypes.array,
    isLoading: PropTypes.bool,
    errorLoading: PropTypes.bool,
    fetchGroceries: PropTypes.func.isRequired,
    toggleBan: PropTypes.func.isRequired,
  };

  static defaultProps = {
    groceries: [],
    isLoading: false,
    errorLoading: false,
  };

  componentDidMount() {
    const { groceries } = this.props;
    if (groceries.length > 0) return;
    this.props.fetchGroceries();
  }
  render() {
    const { isLoading, groceries, toggleBan } = this.props;

    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Grocery</h1>
                </div>

                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Manage Groceries
                    </h6>
                  </div>
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
                            <th className="text-dark-100">Name</th>
                            <th className="text-dark-100">Quantity</th>
                            <th className="text-dark-100">Amount</th>
                            <th className="text-dark-100">Date Added</th>
                            <th className="text-dark-100">Status</th>
                            <th className="text-dark-100">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {groceries.map((grocery) => (
                            <tr key={grocery._id} className="odd gradeX">
                              <td>{grocery.name}</td>
                              <td>{grocery.quantity}</td>
                              <td>KSh {grocery.price}</td>
                              <td>{moment(grocery.dateAdded).format("ll")}</td>
                              <td>{grocery.status}</td>
                              <td className="pa-0">
                                {grocery.status === "Approved" ? (
                                  <FlatButton
                                    className="btn btn-danger circle action-button"
                                    icon="fa fa-ban"
                                    title="Ban"
                                    onClick={() => toggleBan(grocery._id)}
                                  />
                                ) : (
                                    <FlatButton
                                      className="btn btn-success circle action-button"
                                      icon="fa fa-check"
                                      title="Approve"
                                      onClick={() => toggleBan(grocery._id)}
                                    />
                                  )}
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
    fetchGroceries: () => dispatch(fetchGroceries()),
    toggleBan: (id) => dispatch(toggleBanGrocery(id)),
  };
};
export default connect(selectors, mapDispatchToProps)(Grocery);
