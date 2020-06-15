import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { setBg } from "../../../helpers";
import { createSupportGroup } from "../redux/actions";

export class NewGroupModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: '',
      description: '',
      subscriptionFee: '',
      targetAudience: '',
      shouldUpdate: false
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      shouldUpdate: false
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { groupName, targetAudience, subscriptionFee, description } = this.state
    const data = {
      groupName,
      targetAudience,
      description,
      subscriptionFee
    }
    this.props.createSupportGroup(data)
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="modal-title">Add New Group </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body" id="orderDetails">
            <div className="card shadow mb-4">
              <div className="card-body">
                <form id="regform" name="regform" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pr-50">
                        <label htmlFor="sname">Group Name</label>
                        <input type="text" className="form-control" id="groupName" name="groupName" placeholder="" value={this.state.groupName} onChange={this.handleChange} required />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pr-50">
                        <label htmlFor="sname">Target Audience</label>
                        <input type="text" className="form-control" id="targetAudience" name="targetAudience" placeholder="" value={this.state.targetAudience} onChange={this.handleChange} required />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pr-50">
                        <label htmlFor="sname">Subscription Fee</label>
                        <input type="text" className="form-control" id="subscriptionFee" name="subscriptionFee" placeholder="" value={this.state.subscriptionFee} onChange={this.handleChange} required />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                        <label htmlFor="addy">Description</label>
                        <textarea rows="3" type="text" className="form-control" name="description" id="description" value={this.state.description} onChange={this.handleChange} placeholder="" required></textarea>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg">Create Post</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }

}
class Tags extends React.Component {
  shouldComponentUpdate = (nextProps) => {
    return nextProps.shouldUpdate
  }
  render() {
    const { tags } = this.props;
    return (
      tags.map((tag, idx) => <span key={idx} style={{ padding: 5, backgroundColor: setBg(), marginLeft: 3, color: 'white', fontSize: 12, marginTop: 5, borderRadius: 5 }}>{tag}</span>)
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createSupportGroup: (payload) => dispatch(createSupportGroup(payload))
  }
}
export default connect(null, mapDispatchToProps)(NewGroupModal);