import React, {Component}  from "react";
import Modal from "react-bootstrap/Modal";
  

export class NewTopicModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: '',
      title:'',
      description: '',
      image: '',

    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
      
  }
  

  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="modal-title">Add Topic </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body" id="orderDetails">
            <div className="card shadow mb-4">
              <div className="card-body">
                <form className="" method="POST" action="" id="regform" name="regform" enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                        <label for="dgroup">Group</label>
                        <select className="form-control" name="group" id="group" readonly onChange={this.handleChange} value={this.state.group}>
                          <option className="pl-20" selected>--Select--</option>
                          <option value="AA">AA</option>
                          <option value="Weight Watchers">Weight Watchers</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pr-50">
                        <label for="dname">Title:</label>
                        <input type="text" className="form-control" id="title" name="title" placeholder="" required  onChange={this.handleChange} value={this.state.title}/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                        <label for="dcomm">Comment - Description</label>
                        <textarea rows="3" type="text" className="form-control" name="description" id="description" placeholder="" required onChange={this.handleChange} value={this.state.description}></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                        <div className="row">
                          <div className="col-md-8">
                            Select Image<input type="file" className="upload" name="image" id="image" onChange={this.handleChange} value={this.state.image}/>
                          </div>
                            
                        </div>
                      </div>
                    </div>
                  </div>
                        
                  <br />
                  <div className="d-flex">
                    <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg"><i className="fas fa-fw fa-door-open"></i> Add Topic</button>
                  </div>
                  <input type="hidden" name="MM_insert" value="regform" />
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
export default NewTopicModal;