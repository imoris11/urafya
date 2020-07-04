import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button";
import NewGroupModal from "./Modal/NewGroup";
import { connect } from "react-redux";
import selectors from "./redux/selectors";
import { fetchForums, deletePost } from "./redux/actions";
import { setBg } from "../../helpers";
import moment from 'moment';

class Forums extends Component {
  state = {
    modalShow: false,
    modalShow2: false,
  };

  componentDidMount() {
    const { forums } = this.props;
    //Only fetch when state is empty
    if (forums.length > 0) return;
    this.props.fetchForums();
  }

  render() {
    const { modalShow } = this.state;
    const { forums, isLoading } = this.props;
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Forums</h1>
                  <Button
                    onClick={() => this.setState({ modalShow: true })}
                    title="New Post"
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
                      Manage Forum Posts
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <div
                            id="dataTable_filter"
                            className="dataTables_filter"
                          >
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
                        <div className="col-sm-12 col-md-6">
                          <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <p></p>
                            <Link
                              className="mybtncurve btn btn-primary shadow-sm"
                              to="/categories"
                            >
                              Categories
                            </Link>
                          </div>
                        </div>
                      </div>
                      {isLoading && (
                        <p className="text-info text-center">Loading...</p>
                      )}
                      <table
                        className="table table-striped"
                        id="dataTable"
                        width="100%"
                        cellSpacing="0"
                      >
                        <thead className="thead-light">
                          <tr>
                            <th className="text-dark-100">Topic</th>
                            <th className="text-dark-100">Category</th>
                            <th className="text-dark-100">Replies</th>
                            <th className="text-dark-100">Views</th>
                            <th className="text-dark-100">Votes</th>
                            <th className="text-dark-100">Activity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {forums.map((post) =>
                            <tr key={post._id} className="odd gradeX">
                              <td>
                                <p>{post.topic}</p>
                                <p>{post.tags.map((tag, idx) => <span key={idx} style={{ padding: 5, backgroundColor: setBg(), marginLeft: 3, color: 'white', fontSize: 12, borderRadius: 5 }}>{tag}</span>)}</p>
                              </td>
                              <td>{post.category}</td>
                              <td>{post.replies.length}</td>
                              <td>{post.numberOfViews}</td>
                              <td>{post.numberOfVotes}</td>
                              <td>{moment(post.updatedAt).format('LL')}</td>
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

        <Link className="scroll-to-top rounded" to="/page-top">
          <i className="fas fa-angle-up"></i>
        </Link>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchForums: () => dispatch(fetchForums()),
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(selectors, mapDispatchToProps)(Forums)