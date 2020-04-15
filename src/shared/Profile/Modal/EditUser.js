import React from "react";
import Modal from "react-bootstrap/Modal";
  
const EditUserModal = props => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h5 className="modal-title">Edit Personal Information </h5>
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
                                <label for="gen">User Type/Position</label>
                                <select className="form-control" name="gen" id="gen">
                                    <option className="pl-20" selected>--Select--</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Doctor">Doctor</option>
                                    <option value="Pharmacist">Pharmacist</option>
                                    <option value="Grocery Seller">Grocery Seller</option>
                                </select>
                            </div>
                          </div>
                        </div>

                        <hr/>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col-md-6 mb-15 pr-50">
                                <label for="aname">First Name:</label>
                                <input type="text" className="form-control" id="aname" name="aname" placeholder="e.g. John" required/>
                            </div>
                            <div className="col-md-6 mb-15 px-25">
                                <label for="mname">Other Name:</label>
                                <input type="text" className="form-control" id="mname" name="mname" placeholder="e.g. Martin" required/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col-md-6 mb-15 pl-50">
                                <label for="sname">Surname:</label>
                                <input type="text" className="form-control" id="sname" name="sname" placeholder="e.g. Doe" required/>
                            </div>
                            <div className="col-md-6 mb-15 pl-50">
                                <label for="gen">Gender</label>
                                <select className="form-control" name="gen" id="gen">
                                    <option className="pl-20" selected>--Select--</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col-md-6 mb-15 pr-50">
                                <label for="dob">Date of Birth</label>
                                <input type="date" className="form-control" id="dob" name="dob" required/>
                            </div>
                            <div className="col-md-6 mb-15 pl-50">
                                <label for="pnum">Phone Number:</label>
                                <input type="text" className="form-control" id="pnum" name="pnum" placeholder="e.g. +254XXXXXXXX" required/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col-md-6 mb-15 px-25">
                                <label for="uemail">Email</label>
                                <input type="email" className="form-control" id="uemail" name="uemail" placeholder="e.g. johnmartindoe@gmail.com" required/>
                            </div>
                            <div className="col-md-6 mb-15 pr-50">
                                <label for="natid">National ID Card Number</label>
                                <input type="text" className="form-control" name="natid" id="natid" placeholder="e.g xxxxxxxx" required/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col-md-12 mb-15 pl-50">
                                <label for="addy">Address</label>
                                <textarea rows="3" type="text" className="form-control" name="addy" id="addy" placeholder="Enter Residential/Office Address" required></textarea>
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
                          <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg"><i className="fas fa-fw fa-user-lock"></i> Edit User</button>
                        </div>
                        
                        <input type="hidden" name="MM_insert" value=""/>
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
export default EditUserModal;


