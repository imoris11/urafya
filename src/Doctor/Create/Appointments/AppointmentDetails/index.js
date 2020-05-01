import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Picture from "../../../../assets/images/cardi_b.jpg";

class AppointmentDetails extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800"> Patient Appointment</h1>
        </div>
        <div className="mycard card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row">
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="mycard card border-left-success shadow py-2">
                  <img src={Picture} className="card-img-top" />
                </div>
              </div>
              <div className="col-xl-9 col-md-6">
                <p>
                  <b className="text-primary">Fullname:</b> Diamond Rachel
                  Rihanna
                  <br></br>
                  <b className="text-primary">Gender:</b> Female
                  <br></br>
                  <b className="text-primary">Age:</b> 27yrs
                  <br></br>
                  <b className="text-primary">Phone Number:</b> +25479123478
                  <br></br>
                  <hr />
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
              <div className="col-xs-12 ">
                <Tabs>
                  <TabList className="nav nav-tabs nav-fill" id="nav-tab">
                    <Tab className="nav-item nav-link btn-link2">Details</Tab>
                  </TabList>

                  <TabPanel>
                    <div
                      className="tab-content py-3 px-3 px-sm-0"
                      id="nav-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <p>
                          <b className="text-primary">Patient Symptoms:</b>{" "}
                          Headache, Dizziness, Vomiting.
                        </p>
                        <p>
                          <b className="text-primary">Complaint Description:</b>{" "}
                          Et et consectetur ipsum labore excepteur est proident
                          excepteur ad velit occaecat qui minim occaecat veniam.
                          Fugiat veniam incididunt anim aliqua enim pariatur
                          veniam sunt est aute sit dolor anim. Velit non irure
                          adipisicing aliqua ullamco irure incididunt irure non
                          esse consectetur nostrud minim non minim occaecat.
                          Amet duis do nisi duis veniam non est eiusmod tempor
                          incididunt tempor dolor ipsum in qui sit. Exercitation
                          mollit sit culpa nisi culpa non adipisicing
                          reprehenderit do dolore. Duis reprehenderit occaecat
                          anim ullamco ad duis occaecat ex.
                        </p>
                        <hr />
                        <p>
                          <b className="text-primary">
                            Assigned Consultation Method:
                          </b>{" "}
                          Phone Call / Video Call / Test
                        </p>
                        <p>
                          <b className="text-primary">
                            Assigned Consultation Date:
                          </b>{" "}
                          25/06/2019
                        </p>
                        <p>
                          <b className="text-primary">
                            Assigned Consultation Time:
                          </b>{" "}
                          10:35 AM
                        </p>
                        <p>
                          <b className="text-primary">
                            Assigned Test Description:
                          </b>{" "}
                          Malaria, Thphoid, SGC.
                        </p>
                        <hr />
                        <form
                          className=""
                          method="POST"
                          action=""
                          id="regform"
                          name="regform"
                          enctype="multipart/form-data"
                        >
                          <div className="form-group">
                            <div className="form-row">
                              <div className="col-md-12 mb-15 pl-50">
                                <label for="gen">Consultation Method</label>
                                <select
                                  className="form-control"
                                  name="gen"
                                  id="gen"
                                >
                                  <option className="pl-20" selected>
                                    --Select--
                                  </option>
                                  <option value="Phone Call">Phone Call</option>
                                  <option value="Video Call">Video Call</option>
                                  <option value="Test">Test</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <hr />
                          <div className="form-group">
                            <div className="form-row">
                              <div className="col-md-6 mb-15 pr-50">
                                <label for="doc">Date</label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="doc"
                                  name="doc"
                                />
                              </div>
                              <div className="col-md-6 mb-15 pl-50">
                                <label for="ctime">Time:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="ctime"
                                  name="ctime"
                                  placeholder="e.g. 11:00 AM"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="form-row">
                              <div className="col-md-12 mb-15 pl-50">
                                <label for="ctest">Test Description</label>
                                <textarea
                                  rows="3"
                                  type="text"
                                  className="form-control"
                                  name="ctest"
                                  id="ctest"
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <br />
                          <div className="d-flex">
                            <button
                              type="submit"
                              className="btn btn-primary mybtn"
                              id="btnreg"
                              name="btnreg"
                            >
                              <i className="fas fa-fw fa-file"></i> Submit
                              Request
                            </button>
                          </div>
                          <input
                            type="hidden"
                            name="pcomp"
                            value="Consult Start"
                          />
                          <input
                            type="hidden"
                            name="MM_insert"
                            value="regform"
                          />
                        </form>
                      </div>
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
    );
  }
}
export default AppointmentDetails;
