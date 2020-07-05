import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button";
import NewGroupModal from "./Modal/NewGroup";
import { connect } from "react-redux";
import selectors from "./redux/selectors";
import { fetchGroups, deleteSupportGroup } from "./redux/actions";

class SupportGroups extends Component {
  state = {
    modalShow: false,
    modalShow2: false,
  };

  componentDidMount() {
    const { supportGroups } = this.props;
    //Only fetch when state is empty
    if (supportGroups.length > 0) return;
    this.props.fetchGroups();
  }

  render() {
    const { modalShow } = this.state;
    const { supportGroups, isLoading, allGroups } = this.props;
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Private Support Groups</h1>
                  <Button
                    onClick={() => this.setState({ modalShow: true })}
                    title="New Group"
                    showIcon={true}
                    icon={"fas fa-comments fa-sm text-white-50"}
                  />
                  <NewGroupModal
                    show={modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                  />
                </div>

                <div className="card shadow mb-4">
                  <h6 style={{ padding: 10, }}>My Support Groups</h6>
                  <div className="card-body">
                    <div className="table-responsive">
                      {isLoading && (
                        <p className="text-info text-center">Loading...</p>
                      )}
                      <div className="row">
                        {supportGroups.map((group) =>
                          <Link key={group._id} className="col-xl-3 col-md-3 col-sm-3 support-group" to={"/support_groups/" + group._id + "/" + group.chatRoom}>
                            <div className="mycard card border-left-primary shadow h-100 py-2">
                              <div className="card-body">
                                <div className="row no-gutters">
                                  <div className="col-xl-8 col-md-8 col-sm-6">
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{group.groupName}</div>
                                  </div>
                                  <div className="col-xl-4 col-md-4 col-sm-6" style={{ lineHeight: 1, }}>
                                    <div style={{ textAlign: 'center' }} >
                                      <p className="h5 mb-0 font-weight-bold text-gray-800">{group.members}</p>
                                      <p className="text-gray-800">Members</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        )}
                        <div style={{ marginTop: 50, width: "100%" }} className="container-fluid">
                          <h6>All Groups</h6>
                          <table
                            className="table table-striped"
                            id="dataTable"
                            width="100%"
                            cellSpacing="0"
                          >
                            <thead className="thead-light">
                              <tr>
                                <th className="text-dark-100">Group</th>
                                <th className="text-dark-100">Description</th>
                                <th className="text-dark-100">Members</th>
                                <th className="text-dark-100">Activity</th>
                                <th className="text-dark-100">Views</th>
                                <th className="text-dark-100">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {allGroups.map((group) =>
                                <tr key={group._id} className="odd gradeX">
                                  <td>
                                    <p>{group.groupName}</p>
                                  </td>
                                  <td>{group.description}</td>
                                  <td>{group.members}</td>
                                  <td>{group.activity}</td>
                                  <td>{group.numberOfViews}</td>
                                  <td>
                                    <Link to={"/support_groups/" + group._id + "/" + group.chatRoom} className="btn btn-success">View Group</Link>
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>

                      </div>
                    </div>
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
    fetchGroups: () => dispatch(fetchGroups()),
    deleteSupportGroup: (id) => dispatch(deleteSupportGroup(id)),
  };
};

export default connect(selectors, mapDispatchToProps)(SupportGroups)