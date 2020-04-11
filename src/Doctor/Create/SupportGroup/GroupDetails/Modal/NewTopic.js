import React  from "react";
import Modal from "react-bootstrap/Modal";
  
const NewTopicModal = props => {
  return (
    <Modal
      {...props}
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
                <form className="" method="POST" action="" id="regform" name="regform" enctype="multipart/form-data">
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                          <label for="dgroup">Group</label>
                          <select className="form-control" name="dgroup" id="dgroup" readonly>
                              <option className="pl-20" selected>--Select--</option>
                              <option value="AA">AA</option>
                              <option value="Weight Watchers">Weight Watchers</option>
                          </select>
                      </div>
                    </div>
                  </div>

                  <hr/>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pr-50">
                          <label for="dname">Title:</label>
                          <input type="text" className="form-control" id="dname" name="dname" placeholder="" required/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                          <label for="dcomm">Comment - Description</label>
                          <textarea rows="3" type="text" className="form-control" name="dcomm" id="dcomm" placeholder="" required></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-12 mb-15 pl-50">
                          <div className="row">
                            <div className="col-md-8">
                              Select Image<input type="file" className="upload" name="dpic" id="dpic"/>
                            </div>
                            
                          </div>
                      </div>
                    </div>
                  </div>
                        
                  <br/>
                  <div className="d-flex">
                    <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg"><i className="fas fa-fw fa-door-open"></i> Add Topic</button>
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
export default NewTopicModal;