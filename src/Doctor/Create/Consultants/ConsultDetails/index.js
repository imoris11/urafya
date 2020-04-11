import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Picture from '../../../../assets/images/cardi_b.jpg';


class ConsultDetails extends Component { 
    render() {
        return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800"> Patient Consultation</h1>
            </div>
         <div className="mycard card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
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
                              <hr/>
                              <b className="text-primary">Height:</b> 5'7inch
                              <br></br>
                              <b className="text-primary">weight:</b> 73kg
                              <br></br>
                              <b className="text-primary">Blood Pressure:</b> 23/26
                              <br></br>
                              <b className="text-primary">Sugar Level:</b> 40
                              <br></br>
                            </p>
                          </div>           
                        </div>
                      </div>
                    </div>
          
                <br></br>
                 <br></br>
          
                    <div className="mycard card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                          <div className="row">
                            <div className="col-xs-12 " >
                                <Tabs>
                                    
                                    <TabList className="nav nav-tabs nav-fill" id="nav-tab">
                                    <Tab  className="nav-item nav-link btn-link2">Complaint</Tab>
                                    <Tab className="nav-item nav-link btn-link2">Evaluation</Tab>
                                    <Tab className="nav-item nav-link btn-link2">Diagnosis</Tab>
                                    <Tab className="nav-item nav-link btn-link2">Prescription</Tab>
                                    <Tab className="nav-item nav-link btn-link2">Recommendation</Tab>     
                                    </TabList>
                                
                            <TabPanel>
                                <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">                              
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <p><b className="text-primary">Patient Symptoms:</b> Headache, Dizziness, Vomiting.</p>
                                <p><b className="text-primary">Complaint Description:</b> Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</p>
                                <hr/>
                                <p><b className="text-primary">Assigned Consultation Method:</b> Phone Call / Video Call / Test</p>
                                <p><b className="text-primary">Assigned Consultation Date:</b> 25/06/2019</p>
                                <p><b className="text-primary">Assigned Consultation Time:</b> 10:35 AM</p>
                                <p><b className="text-primary">Assigned Test Description:</b> Malaria, Thphoid, SGC.</p>
                                <hr/>
                                <form className="" method="POST" action="" id="regform" name="regform" enctype="multipart/form-data">
                                            <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-12 mb-15 pl-50">
                                                    <label for="gen">Consultation Method</label>
                                                    <select className="form-control" name="gen" id="gen">
                                                        <option className="pl-20" selected>--Select--</option>
                                                        <option value="Phone Call">Phone Call</option>
                                                        <option value="Video Call">Video Call</option>
                                                        <option value="Test">Test</option>
                                                    </select>
                                                </div>
                                            </div>
                                            </div>

                                            <hr/>
                                            <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6 mb-15 pr-50">
                                                    <label for="doc">Date</label>
                                                    <input type="date" className="form-control" id="doc" name="doc" />
                                                </div>
                                                <div className="col-md-6 mb-15 pl-50">
                                                    <label for="ctime">Time:</label>
                                                    <input type="text" className="form-control" id="ctime" name="ctime" placeholder="e.g. 11:00 AM" />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-12 mb-15 pl-50">
                                                    <label for="ctest">Test Description</label>
                                                    <textarea rows="3" type="text" className="form-control" name="ctest" id="ctest" ></textarea>
                                                </div>
                                            </div>
                                            </div>
                                                
                                            <br/>
                                            <div className="d-flex">
                                            <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg"><i className="fas fa-fw fa-file"></i> Submit Request</button>
                                            </div>                                            
                                            <input type="hidden" name="pcomp" value="Consult Start"/>
                                            <input type="hidden" name="MM_insert" value="regform"/>
                                        </form>
                                
                                    </div>
                                    </div>
                            </TabPanel>
                                    


                            <TabPanel>
                                  <div id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                  <br></br>          
                                  <p><b className="text-primary">Patient Test Result</b></p>
                                  <img src=""/>
                                  <hr/>
                                  <p><b className="text-primary">Doctor's Feedback:</b> Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</p>  
                                  <hr/>
                                  <form className="" method="POST" action="" id="regform" name="regform" enctype="multipart/form-data">
                                              <div className="form-group">
                                                <div className="form-row">
                                                  <div className="col-md-12 mb-15 pl-50">
                                                      <label for="dfeed">Doctor's Feedback Description</label>
                                                      <textarea rows="3" type="text" className="form-control" name="dfeed" id="dfeed" ></textarea>
                                                  </div>
                                                </div>
                                              </div>
                                                    
                                              <br/>
                                              <div className="d-flex">
                                                <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg"><i className="fas fa-fw fa-file"></i> Submit Feedback</button>
                                              </div>                                       
                                              <input type="hidden" name="pcomp" value="Evaluated"/>
                                              <input type="hidden" name="MM_insert" value="regform"/>
                                            </form>
                                </div>          
                           </TabPanel>
                                    
                        <TabPanel>
                                  <div className="" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                   <br></br>
                                  <p><b className="text-primary">Test Result Status:</b> Found</p>
                                  <p><b className="text-primary">Disease Name:</b> Hypertension</p>
                                  <p><b className="text-primary">Disease Type:</b> Type B</p>
                                  <p><b className="text-primary">Disease Description:</b> Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</p>
                                  <p><b className="text-primary">Doctor's Advice:</b> Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</p>
                                  <hr/>
                                  <form className="" method="POST" action="<?php echo $editFormAction; ?>" id="regform" name="regform" enctype="multipart/form-data">
                                              <div className="form-group">
                                                <div className="form-row">
                                                  <div className="col-md-12 mb-15 pl-50">
                                                      <label for="tstat">Test Result Status</label>
                                                      <select className="form-control" name="tstat" id="tstat">
                                                          <option className="pl-20" selected>--Select--</option>
                                                          <option value="Fount">Found - Conclusive</option>
                                                          <option value="Not Found">Not Found - Inconclusive</option>
                                                      </select>
                                                  </div>
                                                </div>
                                              </div>

                                              <hr/>
                                              <div className="form-group">
                                                <div className="form-row">
                                                  <div className="col-md-6 mb-15 pr-50">
                                                      <label for="tname">Disease Name</label>
                                                      <input type="text" className="form-control" id="tname" name="tname" placeholder="e.g. Diabetes" />
                                                  </div>
                                                  <div className="col-md-6 mb-15 pl-50">
                                                      <label for="ttype">Disease Type</label>
                                                      <input type="text" className="form-control" id="ttype" name="ttype" placeholder="e.g. Type II" />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="form-group">
                                                <div className="form-row">
                                                  <div className="col-md-12 mb-15 pl-50">
                                                      <label for="tdesc">Disease Description</label>
                                                      <textarea rows="3" type="text" className="form-control" name="tdesc" id="tdesc" ></textarea>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="form-group">
                                                <div className="form-row">
                                                  <div className="col-md-12 mb-15 pl-50">
                                                      <label for="tadv">Doctor's Advice</label>
                                                      <textarea rows="3" type="text" className="form-control" name="tadv" id="tadv" ></textarea>
                                                  </div>
                                                </div>
                                              </div>
                                                    
                                              <br/>
                                              <div className="d-flex">
                                                <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg"><i className="fas fa-fw fa-file"></i> Submit Diagnosis</button>
                                              </div>                                       
                                              <input type="hidden" name="pcomp" value="Diagnosed"/>
                                              <input type="hidden" name="MM_insert" value="regform"/>
                                            </form>
                                </div>                 
                            </TabPanel>
                                    


                        <TabPanel>
                                  <div id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                  <br></br>
                                  <p><b className="text-primary">Total Number of Days for Treatment:</b> 10</p>
                                  <p><b className="text-primary">Recommended Prescription:</b> Amoxillin 500g Tablet - Twice a Day for 5days, Paracetamol 500g Tablet - Thrice a Day for 7days.</p>
                                  <hr/>
                                  <form className="" method="POST" action="<?php echo $editFormAction; ?>" id="regform" name="regform" enctype="multipart/form-data">
                                              <div className="form-group">
                                                <div className="form-row">
                                                  <div className="col-md-12 mb-15 pl-50">
                                                      <label for="rno">Total Number of Days for Treatment</label>
                                                      <input type="text" className="form-control" name="rno" id="rno" />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="form-group">
                                                <div className="form-row">
                                                  <div className="col-md-12 mb-15 pl-50">
                                                      <label for="rpresc">Recommended Prescription</label>
                                                      <select className="form-control" name="rpresc" id="rpresc" multiple>
                                                          <option className="pl-20" selected>--Select--</option>
                                                          <option value="Amoxillin 500g Tablet">Amoxillin 500g Tablet</option>
                                                          <option value="Paracetamol 500g Tablet">Paracetamol 500g Tablet</option>
                                                      </select>
                                                  </div>
                                                </div>
                                              </div>
                                                    
                                              <br/>
                                              <div className="d-flex">
                                                <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg"><i className="fas fa-fw fa-file"></i> Submit Prescription</button>
                                              </div>
                                              
                                              <input type="hidden" name="pcomp" value="Prescription Sent"/>
                                              <input type="hidden" name="MM_insert" value="regform"/>
                                            </form>
                                </div>        
                        </TabPanel> 
                                    

                         <TabPanel>
                                  <div id="nav-recommend" role="tabpanel" aria-labelledby="nav-recommend-tab">
                                   <br></br>
                                  <p><b className="text-primary">General Recommendation:</b> Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</p>
                                  <p><b className="text-primary">Recommended Groceries:</b> Brown Rice, Brown Sugar, Green Smoothie.</p>
                                  <p><b className="text-primary">Recommended Support Groups:</b> Motivation, General.</p>
                                  <hr/>
                                  <form className="" method="POST" action="" id="regform" name="regform" enctype="multipart/form-data">
                                              <div className="form-group">
                                                <div className="form-row">
                                                  <div className="col-md-12 mb-15 pl-50">
                                                      <label for="grec">General Recommendation</label>
                                                      <textarea rows="3" type="text" className="form-control" name="grec" id="grec" ></textarea>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="form-group">
                                                <div className="form-row">
                                                  <div className="col-md-12 mb-15 pl-50">
                                                      <label for="rgroc">Recommended Groceries</label>
                                                      <select className="form-control" name="rgroc" id="rgroc" multiple>
                                                          <option className="pl-20" selected>--Select--</option>
                                                          <option value="Brown Rice">Brown Rice</option>
                                                          <option value="Brown Sugar">Brown Sugar</option>
                                                      </select>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="form-group">
                                                <div className="form-row">
                                                  <div className="col-md-12 mb-15 pl-50">
                                                      <label for="rsupp">Recommended Support Groups</label>
                                                      <select className="form-control" name="rsupp" id="rsupp" multiple>
                                                          <option className="pl-20" selected>--Select--</option>
                                                          <option value="General">General</option>
                                                          <option value="AA">AA</option>
                                                      </select>
                                                  </div>
                                                </div>
                                              </div>
                                                    
                                              <br/>
                                              <div className="d-flex">
                                                <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg"><i className="fas fa-fw fa-file"></i> Submit Recommendation</button>
                                              </div>
                                             
                                              <input type="hidden" name="pcomp" value="Consult Done"/>
                                              <input type="hidden" name="MM_insert" value="regform"/>
                                            </form>
                                </div>             

                        </TabPanel>            
                    </Tabs>
                    </div>
                    </div>
                </div>
                </div>
                <br></br>
                <br></br>
        </div>                   
    )
}
}
export default ConsultDetails;