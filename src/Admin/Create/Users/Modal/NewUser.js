import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
  

 
  
export class NewUserModal extends Component  {
  constructor(props) {
      super(props);
      this.state = {     
        position: '',
        firstname: '',
        othername: '',
        surname: '',
        gender: '',
        dob: '',
        phone: '',
        email: '',
        natid: '',
        address: '',
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
          <h5 className="modal-title">Add New User's Detail </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body" id="orderDetails">
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <form className="" method="POST"  id="regform" name="regform" enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col-md-12 mb-15 pl-50">
                                <label for="gen">User Type/Position</label>
                                <select className="form-control" name="position" id='position' value={this.state.position} onChange={this.handleChange}>
                                    <option className="pl-20" selected>--Select--</option>
                                    <option >Admin</option>
                                    <option >Doctor</option>
                                    <option >Pharmacist</option>
                                    <option >Grocery Seller</option>
                                </select>
                            </div>
                          </div>
                        </div>

                        <hr/>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col-md-6 mb-15 pr-50">
                                <label for="firstname">First Name:</label>
                                <input type="text" className="form-control" id="firstname" name="firstname" placeholder="e.g. John" required value={this.state.firstname} onChange={this.handleChange}/>
                            </div>
                            <div className="col-md-6 mb-15 px-25">
                                <label for="mname">Other Name:</label>
                                <input type="text" className="form-control" id="othername" name="othername" placeholder="e.g. Martin" required value={this.state.othername} onChange={this.handleChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col-md-6 mb-15 pl-50">
                                <label for="surname">Surname:</label>
                                <input type="text" className="form-control" id='surname' name="surname" placeholder="e.g. Doe" value={this.state.surname} required onChange={this.handleChange}/>
                            </div>
                            <div className="col-md-6 mb-15 pl-50">
                                <label for="gen">Gender</label>
                                <select className="form-control" name="gender" id='gender' value={this.state.gender} onChange={this.handleChange}>
                                    <option className="pl-20" selected>--Select--</option>
                                    <option >Male</option>
                                    <option >Female</option>
                                </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col-md-6 mb-15 pr-50">
                                <label for="dob">Date of Birth</label>
                                <input type="date" className="form-control" id="dob" name="dob" required value={this.state.dob} onChange={this.handleChange}/>
                            </div>
                            <div className="col-md-6 mb-15 pl-50">
                                <label for="pnum">Phone Number:</label>
                                <input type="text" className="form-control"  id='phone' name="phone" placeholder="e.g. +254XXXXXXXX" required value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col-md-6 mb-15 px-25">
                                <label for="uemail">Email</label>
                                <input type="email" className="form-control" id='email' name="email" placeholder="e.g. johnmartindoe@gmail.com" required value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="col-md-6 mb-15 pr-50">
                                <label for="natid">National ID Card Number</label>
                                <input type="text" className="form-control" name="natid" id="natid" placeholder="e.g xxxxxxxx" required value={this.state.natid} onChange={this.handleChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col-md-12 mb-15 pl-50">
                                <label for="addy">Address</label>
                                 <textarea rows="3" type="text" className="form-control" id='address' name="address" placeholder="Enter Residential/Office Address" required onChange={this.handleChange} value={this.state.address}>
                          
                                </textarea>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col-md-12 mb-15 pl-50">
                                <div className="row">
                                  <div className="col-md-8">
                                    Select Image<input type="file" className="upload" name="image" id='image' value={this.state.image} onChange={this.handleChange}/>
                                  </div>
                                  
                                </div>
                            </div>
                          </div>
                        </div>
                              
                        <br/>
                        <div className="d-flex">
                          <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg"><i className="fas fa-fw fa-door-open"></i> Add User</button>
                        </div>
                        
                        <input type="hidden" name="MM_insert" value={this.state.value} onChange={this.handleChange}/>
                      </form>
                    </div>
                </div>
              </div>
                        
      </Modal.Body>
      <Modal.Footer>
                  <small>Default Password: UR12345</small>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.onHide}>Close</button>             
      </Modal.Footer>
    </Modal>
  );
  }
  
}
export default NewUserModal;



