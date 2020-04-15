import React, {Component}  from "react";
import Modal from "react-bootstrap/Modal";
  

export class NewSymptomModal extends Component  {
  constructor(props) {
      super(props);
    this.state = {  
        name:'',
        bodypart: '',
        description: '',
        image:'',

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
         <h5 className="modal-title">Add New Symptom </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body" id="orderDetails">
            <div className="card shadow mb-4">
                <div className="card-body">
                <form className="" method="POST" action="" id="regform" name="regform" enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <div className="form-row">
                        <div className="col-md-12 mb-15 pr-50">
                            <label for="name">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="e.g. Headache" value={this.state.name} required onChange={this.handleChange}/>
                        </div>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="form-row">
                        <div className="col-md-12 mb-15 pl-50">
                            <label for="gen">Body Part</label>
                            <select className="form-control" name="bodypart" id="bodypart" value={this.state.bodypart} onChange={this.handleChange}>
                                <option className="pl-20" selected>--Select--</option>
                                <option value="Forehead">Head - Frontal lobe (Forehead)</option>
                                <option value="Head - Left Side">Head - Left Side</option>
                            </select>
                        </div>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="form-row">
                        <div className="col-md-12 mb-15 pl-50">
                            <label for="addy">Description</label>
                              <textarea rows="3" type="text" className="form-control" name="description" id="description" value={this.state.description} placeholder="" required onChange={this.handleChange}>                                           
                            </textarea>
                        </div>
                    </div>
                    </div>

                    <div className="form-group">
                    <div className="form-row">
                        <div className="col-md-12 mb-15 pl-50">
                            <div className="row">
                            <div className="col-md-8">
                            Select Image<input type="file" className="upload" name="image" id="image" value={this.state.image} onChange={this.handleChange}/>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                    </div>
                        
                    <br/>
                    <div className="d-flex">
                    <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg"><i className="fas fa-fw fa-save"></i> Add Symptom</button>
                    </div>
                    
                    <input type="hidden" name="MM_insert" value="regform"/>
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
export default NewSymptomModal;