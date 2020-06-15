import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button";
import NewGroupModal from "./Modal/NewGroup";
import { connect } from "react-redux";
import selectors from "./redux/selectors";
import { fetchGroups, deleteSupportGroup } from "./redux/actions";
import { setBg } from "../../helpers";
import moment from 'moment';

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
    const { supportGroups, isLoading } = this.props;
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Support Groups</h1>
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
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Manage Support Groups
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      {isLoading && (
                        <p className="text-info text-center">Loading...</p>
                      )}
                      <div className="row">
                        {supportGroups.map((group) =>
                          <div key={group._id} className="col-xl-6 col-md-6 col-sm-6 mb-4">
                            <div className="mycard card border-left-primary shadow h-100 py-2">
                              <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                  <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Chat Room: {group.chatRoom}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{group.groupName}</div>
                                  </div>
                                  <div className="col-auto ">
                                    <Link to={"/support_groups/" + group._id}>
                                      <i className="fas fa-door-closed pulse-button fa-2x text-gray-300"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
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