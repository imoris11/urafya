import React, { Component } from "react";
import Picture from '../../../assets/images/cardi_b.jpg';


class PatientDetails extends Component {
  render() {
    return (
       <div className="container-fluid" >

          
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Doctor's Prescriptions</h1>
          </div>

         
                    <div className="mycard card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                          
                              <h5>Patient's Details</h5>
                          <div className="row">
                          <div className="col-xl-3 col-md-6 mb-4">
                            <div className="mycard card border-left-success shadow py-2">
                              <img src={Picture} className="card-img-top"/>
                            </div>
                          </div>
                          <div className="col-xl-9 col-md-6">
                            <p>
                              <b className="text-primary">Fullname:</b> Diamond Rachel Rihanna
                              <br></br>
                              <b className="text-primary">Gender:</b> Female
                              <br></br>
                              <b className="text-primary">Age:</b> 27yrs
                              <br></br>
                              <b className="text-primary">Phone Number:</b> +25479123478
                              <br></br>
                              <b className="text-primary">Height:</b> 5'7inch
                              <br></br>
                              <b className="text-primary">weight:</b> 73kg
                              <br></br>
                              <b className="text-primary">Blood Pressure:</b> 23/26
                              <br></br>
                              <b className="text-primary">Sugar Level:</b> 40
                              <br></br>
                              <b className="text-primary">Address:</b> 40 Link up road, Nairobi, Kenya
                              <br></br>
                            </p>
                          </div>           
                       </div>
                
                        <br></br>
                        <hr/>
                        
                          <div className="row">
                          <div className="col-xl-12 col-md-12">
                              <h5>Doctor's Prescription</h5>
                              <b className="text-primary">Prescriptions:</b> Paracetamol 500mg tab, Blood Tonic 200mg btl, Vitamin C.
                              <br></br>
                              <b className="text-primary">No of Treatment Days:</b> 10
                              <br></br>
                              <b className="text-primary">Staus:</b> Paid
                              <br></br>
                              <b className="text-primary">Delivery Fee:</b> 
                              <br></br>
                              <b className="text-primary">Delivery Date:</b> 
                              <br></br>
                          </div>           
                        </div>
                        </div>
                      </div>
                    

                    <br></br>
                     <br></br>
                  
                    <div className="mycard card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        
                          <div className="row">
                          <div className="col-xl-12 col-md-12">
                              <h5>Add Dosage to Prescription</h5>
                              <form className="" method="POST" action="<?php echo $editFormAction; ?>" id="regform" name="regform" enctype="multipart/form-data">
                                              <div className="form-group">
                                                <div className="form-row">
                                                  <div className="col-md-3 mb-15 pl-50">
                                                      <label for="pname">Name</label>
                                                      <select className="form-control" name="pname" id="pname">
                                                          <option className="pl-20" selected>--Select--</option>
                                                          <option value="Paracetamol">Paracetamol 500mg Tab</option>
                                                          <option value="Blood Tonic">Blood Tonic</option>
                                                          <option value="Vitamin C">Vitamin C</option>
                                                      </select>
                                                  </div>
                                                  <div className="col-md-3 mb-15 pr-50">
                                                      <label for="nod">No of Days</label>
                                                      <input type="number" className="form-control" id="nod" name="nod" placeholder="e.g. 5"/>
                                                  </div>
                                                  <div className="col-md-3 mb-15 pl-50">
                                                      <label for="ctime">Dosage Time:</label>
                                                      <select className="form-control" name="ctimectime" id="ctime">
                                                          <option className="pl-20" selected>--Select--</option>
                                                          <option value="Once Daily">Once Daily</option>
                                                          <option value="Twice Daily">Twice Daily</option>
                                                          <option value="Thrice Daily">Thrice Daily</option>
                                                      </select>
                                                  </div>
                                                  <div className="col-md-3 mb-15 pl-50">
                                                      <label for="ctest">Other Info</label>
                                                      <textarea rows="3" type="text" className="form-control" name="ctest" id="ctest" ></textarea>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="d-flex">
                                                <button type="button" className="btn btn-primary mybtn"><i className="fas fa-fw fa-plus"></i> Add More</button>
                                              </div>
                                              <hr/>

                                              <div className="form-group">
                                                <div className="form-row">
                                                  <div className="col-md-6 mb-15 pl-50">
                                                      <label for="dfee">Delivery Fee (KSh)</label>
                                                      <input type="text" className="form-control" name="dfee" id="dfee" placeholder="e.g. 3,000.00"/>
                                                  </div>
                                                  <div className="col-md-6 mb-15 pr-50">
                                                      <label for="ddate">Delivery Date</label>
                                                      <input type="date" className="form-control" id="ddate" name="ddate" placeholder="e.g. 5"/>
                                                  </div>
                                                </div>
                                              </div>
                                                    
                                              <br/>
                                              <div className="d-flex">
                                                <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg"><i className="fas fa-fw fa-file"></i> Submit Dosage</button>
                                              </div>
                                              
                                              <input type="hidden" name="pcomp" value="Dosage Provided"/>
                                             <input type="hidden" name="MM_insert" value="regform" />
                               
                                            </form>
                            
                          </div>           
                        </div>
                     </div>
                      </div>
                    
          
          <br></br>

                
                </div>
     
       
    );
  }
}
export default PatientDetails;
