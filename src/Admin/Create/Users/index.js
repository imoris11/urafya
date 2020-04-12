import React, { Component } from "react";
import Button from "../../../components/atoms/Button";
import NewUserModal from "./Modal/NewUser";
import ViewUserModal from "./Modal/ViewUser";
import Pagination from "../../../components/organisms/pagination";
import { connect } from "react-redux";
import selectors from "./redux/selectors";
import { fetchUsers } from "./redux/actions";
import PropTypes from "prop-types";
export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      modalShow2: false,
    };
  }

  static propTypes = {
    users: PropTypes.array,
    fetchingUsers: PropTypes.bool,
    errorFetchingUsers: PropTypes.bool,
    fetchedUsers: PropTypes.bool,
  };

  static defaultProps = {
    users: [],
    fetchingUsers: false,
    errorFetchingUsers: false,
    fetchedUsers: false,
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { modalShow2, modalShow } = this.state;
    return (
      <div id="content">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Users</h1>
            {/* <span className="mybtncurve btn btn-primary shadow-sm" onClick={() => setModalShow(true)}>
              <i className="fas fa-user-plus fa-sm text-white-50"></i> New User</span>  */}
            <Button
              onClick={() => this.setState({ modalShow: true })}
              title="New User"
              showIcon={true}
              icon={"fas fa-user-plus fa-sm text-white-50"}
            />
            <NewUserModal
              show={modalShow}
              onHide={() => this.setState({ modalShow: false })}
            />
          </div>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Manage Users
              </h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="dataTable_length">
                      <label>
                        Show
                        <select
                          name="dataTable_length"
                          aria-controls="dataTable"
                          className="custom-select custom-select-sm form-control form-control-sm"
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>{" "}
                        entries
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="dataTable_filter" className="dataTables_filter">
                      <label>
                        Search:
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder=""
                          aria-controls="dataTable"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                {this.props.fetchingUsers && (
                  <p className="text-center text-info">Fetching new users</p>
                )}
                <table
                  className="table"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th className="text-dark-100">Position</th>
                      <th className="text-dark-100">Gender</th>
                      <th className="text-dark-100">Email</th>
                      <th className="text-dark-100">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd gradeX">
                      <td>
                        <div
                          className="btn btn-link circle action-button ml-15 mr-10"
                          onClick={() => this.setState({ modalShow2: true })}
                        >
                          <i className="fa fa-eye"></i>
                        </div>{" "}
                        <ViewUserModal
                          show={modalShow2}
                          onHide={() => this.setState({ modalShow2: false })}
                        />
                        Diamonds Rihanna
                      </td>
                      <td>Doctor</td>
                      <td>Female</td>
                      <td>drih288@gmail.com</td>
                      <td className="pa-0">
                        <form method="post" action="" name="buy" id="buy">
                          <button
                            type="submit"
                            className="btn btn-danger circle action-button"
                          >
                            <i className="fa fa-trash"></i> Remove
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
    getUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(selectors, mapDispatchToProps)(Users);
