import React, { Component } from "react";
import Pagination from "../../../components/organisms/pagination";
import { Link } from "react-router-dom";
import ShowSearch from "../../../components/organisms/show_search";
import { connect } from "react-redux";
import selectors from "./redux/selectors";
import { fetchGroceries } from "./redux/actions";
import PropTypes from "prop-types";
//import moment from "moment";

class Grocery extends Component {
  static propTyoes = {
    groceries: PropTypes.array,
    isLoading: PropTypes.bool,
    errorLoading: PropTypes.bool,
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
    const { isLoading, errorLoading, groceries } = this.props;

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
                              {/* <td>{moment(grocery.created_at).format("ll")}</td> */}
                              <td>Approved</td>
                              <td className="pa-0">
                                <form
                                  method="post"
                                  action="<?php echo $editFormAction; ?>"
                                  name="buy"
                                  id="buy"
                                >
                                  <button
                                    type="submit"
                                    className="btn btn-danger circle action-button"
                                  >
                                    <i className="fa fa-ban"></i> Ban
                                  </button>
                                  <input
                                    name="buyalbum"
                                    type="hidden"
                                    id="buyalbum"
                                    value=""
                                  />
                                </form>
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
  };
};
export default connect(selectors, mapDispatchToProps)(Grocery);
