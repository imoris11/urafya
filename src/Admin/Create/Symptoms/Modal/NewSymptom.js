import React  from "react";
import Modal from "react-bootstrap/Modal";
  
const NewSymptomModal = props => {
  return (
    <Modal
      {...props}
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
                <form className="" method="POST" action="<?php echo $editFormAction; ?>" id="regform" name="regform" enctype="multipart/form-data">
                    <div className="form-group">
                    <div className="form-row">
                        <div className="col-md-12 mb-15 pr-50">
                            <label for="sname">Name:</label>
                            <input type="text" className="form-control" id="sname" name="sname" placeholder="e.g. Headache" required/>
                        </div>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="form-row">
                        <div className="col-md-12 mb-15 pl-50">
                            <label for="gen">Body Part</label>
                            <select className="form-control" name="gen" id="gen">
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
                              <textarea rows="3" type="text" className="form-control" name="addy" id="addy" placeholder="" required>                                           
                            </textarea>
                        </div>
                    </div>
                    </div>

                    <div className="form-group">
                    <div className="form-row">
                        <div className="col-md-12 mb-15 pl-50">
                            <div className="row">
                            <div className="col-md-8">
                                Select Image<input type="file" className="upload" name="uppic" id="uppic"/>
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
             <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}
export default NewSymptomModal;