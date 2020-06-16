import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import selectors from "../redux/selectors";
import { fetchGroups, fetchGroup } from "../redux/actions";


const styles = {
  textInfo: {
    fontSize: 12
  },
  textLabel: {
    fontSize: 12,
    fontWeight: '600'
  }
}
class SupportGroups extends Component {
  state = {
    comment: ''
  };

  componentDidMount() {
    const { supportGroups } = this.props;
    //Only fetch when state is empty
    this.props.fetchGroup(this.props.match.params.id)
    if (supportGroups.length > 0) return;
    this.props.fetchGroups();

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted")
  }

  render() {
    const { group } = this.props
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="card shadow mb-4">
                  <div className="card-body">
                    <div className='row'>
                      <div className="col-xl-6 col-md-6 col-sm-6 mb-4">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            {group.creator &&
                              <div className="row">
                                <div className="col-xl-2 col-md-3 mb-2">
                                  <img
                                    src={group.creator.image}
                                    className="card-img-top"
                                    alt="admin"
                                    style={{ borderRadius: '50%', height: 75, width: 75 }}
                                  />
                                </div>
                                <div style={{ lineHeight: 0.5 }} className="col-xl-10 col-md-9">
                                  <h5>{group.groupName}</h5>
                                  <p style={styles.textInfo}>{group.creator.specialization}</p>
                                  <p style={styles.textInfo}>{group.creator.education}</p>
                                  <p style={styles.textInfo}>{group.likes}</p>
                                </div>
                              </div>
                            }
                          </div>

                          <div className="col-auto ">
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6 col-sm-6 mb-4">
                        <div className="row">
                          <div className='col-xl-12 col-md-12 col-sm-12'>
                            <div>
                              <h6><b>Target Audience</b></h6>
                              <p style={styles.textInfo}>{group.targetAudience}</p>
                            </div>
                          </div>
                          <div style={{ marginLeft: 15 }} className='row'>
                            <div style={{ marginRight: 30 }}>
                              <p style={styles.textLabel}>Members</p>
                              <p style={styles.textInfo}>{group.members}</p>
                            </div>
                            <div>
                              <p style={styles.textLabel}>Subscription Fee</p>
                              <p style={styles.textInfo}>1000</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ borderWidth: 1, backgroundColor: 'whitesmoke' }} className="row">
                      <div style={{ height: 480 }}>
                        <form onSubmit={this.handleSubmit} style={{ position: 'absolute', bottom: 10, width: '98%', display: 'flex', }}>
                          <div className="form-group" style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <div className="form-row">
                              <div className="col-md-12 mb-15 pr-50">
                                <input className="form-control" id="comment" name="comment" placeholder="Add Comment" value={this.state.comment} onChange={this.handleChange} required />
                              </div>
                            </div>
                          </div>
                        </form>
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
    fetchGroup: (id) => dispatch(fetchGroup(id))
  };
};

export default connect(selectors, mapDispatchToProps)(SupportGroups)
