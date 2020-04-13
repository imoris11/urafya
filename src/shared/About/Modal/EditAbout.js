import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
  
export class EditAboutModal extends Component  {
  constructor(props) {
      super(props);
    this.state = {  
      description: '',
      condition: '',
      support:'',
     

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
            <h5 className="modal-title">About - Add General Information </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body" id="orderDetails">
            <div className="card shadow mb-4">
              <div className="card-body">
                <form className="" method="POST" action="" id="regform" name="regform" enctype="multipart/form-data"onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pr-50">
                        <label for="adesc">About - Description</label>
                        <textarea rows="3" type="text" className="form-control" name="description" id="description" value={this.state.description} onChange={this.handleChange} placeholder="" required></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                        <label for="tdesc">About - Terms & Conditions</label>
                        <textarea rows="3" type="text" className="form-control" name="condition" id="condition" value={this.state.condition} onChange={this.handleChange} placeholder="" required></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                        <label for="ahelp">About - Help & Support</label>
                        <textarea rows="3" type="text" className="form-control" name="support" id="support" value={this.state.support} onChange={this.handleChange} placeholder="" required></textarea>
                      </div>
                    </div>
                  </div>
                          
                  <br />
                  <div className="d-flex">
                    <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg"><i className="fas fa-fw fa-file-archive"></i> Add Information</button>
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
export default EditAboutModal;


