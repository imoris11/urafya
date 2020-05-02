import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { connect } from "react-redux";
import selectors from "../redux/selectors";
import { fetchConsultation } from "../redux/actions";
import PropTypes from "prop-types";
import moment from "moment";
class ConsultDetails extends Component {
  state = {};
  static propTypes = {
    fetchConsultation: PropTypes.func.isRequired,
    consultation: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorLoading: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    isLoading: true,
  };

  componentDidMount() {
    this.props.fetchConsultation(this.props.match.params.id);
  }

  getAge = (dob) => {
    const birthYear = dob.split("-")[0];
    const currentYear = new Date().getFullYear();
    return currentYear - Number(birthYear);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { isLoading, errorLoading, consultation } = this.props;
    return (
      <div>
        {isLoading ? (
          <p className="tex-center text-info">Loading</p>
        ) : (
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800"> Patient Consultation</h1>
            </div>
            <div className="mycard card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="mycard card border-left-success shadow py-2">
                      {consultation.dateCreated && (
                        <img
                          src={consultation.patient.biodata.general.imageUri}
                          className="card-img-top"
                        />
                      )}
                    </div>
                  </div>
                  {consultation.dateCreated && (
                    <div className="col-xl-9 col-md-6">
                      <p>
                        <b className="text-primary">Fullname:</b>{" "}
                        {consultation.patient.biodata.general.firstName}{" "}
                        {consultation.patient.biodata.general.lastName}
                        <br></br>
                        <b className="text-primary">Gender:</b>{" "}
                        {consultation.patient.gender}
                        <br></br>
                        <b className="text-primary">Age:</b>{" "}
                        {this.getAge(consultation.patient.biodata.general.dob)}
                        yrs
                        <br></br>
                        <b className="text-primary">Phone Number:</b>{" "}
                        {consultation.patient.phoneNumber}
                        <br></br>
                      </p>
                      <hr />
                      <p>
                        <b className="text-primary">Height:</b>{" "}
                        {consultation.complaint.height}
                        <br></br>
                        <b className="text-primary">weight:</b>{" "}
                        {consultation.complaint.weight}
                        <br></br>
                        <b className="text-primary">Blood Pressure:</b>{" "}
                        {consultation.complaint.bloodPressure}
                        <br></br>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <br></br>
            <br></br>
            {consultation.dateCreated && (
              <div className="mycard card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xs-12 ">
                      <Tabs>
                        <TabList className="nav nav-tabs nav-fill" id="nav-tab">
                          <Tab className="nav-item nav-link btn-link2">
                            Complaint
                          </Tab>
                          <Tab className="nav-item nav-link btn-link2">
                            Evaluation
                          </Tab>
                          <Tab className="nav-item nav-link btn-link2">
                            Diagnosis
                          </Tab>
                          <Tab className="nav-item nav-link btn-link2">
                            Prescription
                          </Tab>
                          <Tab className="nav-item nav-link btn-link2">
                            Recommendation
                          </Tab>
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
                                <b className="text-primary">
                                  Patient Symptoms:
                                </b>{" "}
                                {consultation.complaint.symptoms.join(", ")}
                              </p>
                              <p>
                                <b className="text-primary">
                                  Complaint Description:
                                </b>{" "}
                                {consultation.complaint.complaintDescription}
                              </p>
                              <hr />
                              <p>
                                <b className="text-primary">
                                  Assigned Consultation Method:
                                </b>{" "}
                                {consultation.complaint.consultationMethod}
                              </p>
                              <p>
                                <b className="text-primary">
                                  Assigned Consultation Date:
                                </b>{" "}
                                {moment(consultation.complaint.date).format(
                                  "ll"
                                )}
                              </p>
                              <p>
                                <b className="text-primary">
                                  Assigned Consultation Time:
                                </b>{" "}
                                {consultation.complaint.time}
                              </p>
                              <p>
                                <b className="text-primary">
                                  Assigned Test Description:
                                </b>{" "}
                                {consultation.complaint.testDescription}
                              </p>
                              <hr />
                            </div>
                          </div>
                        </TabPanel>

                        <TabPanel>
                          <div
                            id="nav-profile"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab"
                          >
                            <br></br>
                            <p>
                              <b className="text-primary">
                                Patient Test Result
                              </b>
                            </p>
                            <img src="" />
                            <hr />
                            <p>
                              <b className="text-primary">Doctor's Feedback:</b>{" "}
                              Et et consectetur ipsum labore excepteur est
                              proident excepteur ad velit occaecat qui minim
                              occaecat veniam. Fugiat veniam incididunt anim
                              aliqua enim pariatur veniam sunt est aute sit
                              dolor anim. Velit non irure adipisicing aliqua
                              ullamco irure incididunt irure non esse
                              consectetur nostrud minim non minim occaecat. Amet
                              duis do nisi duis veniam non est eiusmod tempor
                              incididunt tempor dolor ipsum in qui sit.
                              Exercitation mollit sit culpa nisi culpa non
                              adipisicing reprehenderit do dolore. Duis
                              reprehenderit occaecat anim ullamco ad duis
                              occaecat ex.
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
                                    <label for="dfeed">
                                      Doctor's Feedback Description
                                    </label>
                                    <textarea
                                      rows="3"
                                      type="text"
                                      className="form-control"
                                      name="dfeed"
                                      id="dfeed"
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
                                  Feedback
                                </button>
                              </div>
                              <input
                                type="hidden"
                                name="pcomp"
                                value="Evaluated"
                              />
                              <input
                                type="hidden"
                                name="MM_insert"
                                value="regform"
                              />
                            </form>
                          </div>
                        </TabPanel>

                        <TabPanel>
                          <div
                            className=""
                            id="nav-contact"
                            role="tabpanel"
                            aria-labelledby="nav-contact-tab"
                          >
                            <br></br>
                            <p>
                              <b className="text-primary">
                                Test Result Status:
                              </b>{" "}
                              Found
                            </p>
                            <p>
                              <b className="text-primary">Disease Name:</b>{" "}
                              Hypertension
                            </p>
                            <p>
                              <b className="text-primary">Disease Type:</b> Type
                              B
                            </p>
                            <p>
                              <b className="text-primary">
                                Disease Description:
                              </b>{" "}
                              Et et consectetur ipsum labore excepteur est
                              proident excepteur ad velit occaecat qui minim
                              occaecat veniam. Fugiat veniam incididunt anim
                              aliqua enim pariatur veniam sunt est aute sit
                              dolor anim. Velit non irure adipisicing aliqua
                              ullamco irure incididunt irure non esse
                              consectetur nostrud minim non minim occaecat. Amet
                              duis do nisi duis veniam non est eiusmod tempor
                              incididunt tempor dolor ipsum in qui sit.
                              Exercitation mollit sit culpa nisi culpa non
                              adipisicing reprehenderit do dolore. Duis
                              reprehenderit occaecat anim ullamco ad duis
                              occaecat ex.
                            </p>
                            <p>
                              <b className="text-primary">Doctor's Advice:</b>{" "}
                              Et et consectetur ipsum labore excepteur est
                              proident excepteur ad velit occaecat qui minim
                              occaecat veniam. Fugiat veniam incididunt anim
                              aliqua enim pariatur veniam sunt est aute sit
                              dolor anim. Velit non irure adipisicing aliqua
                              ullamco irure incididunt irure non esse
                              consectetur nostrud minim non minim occaecat. Amet
                              duis do nisi duis veniam non est eiusmod tempor
                              incididunt tempor dolor ipsum in qui sit.
                              Exercitation mollit sit culpa nisi culpa non
                              adipisicing reprehenderit do dolore. Duis
                              reprehenderit occaecat anim ullamco ad duis
                              occaecat ex.
                            </p>
                            <hr />
                            <form
                              className=""
                              method="POST"
                              action="<?php echo $editFormAction; ?>"
                              id="regform"
                              name="regform"
                              enctype="multipart/form-data"
                            >
                              <div className="form-group">
                                <div className="form-row">
                                  <div className="col-md-12 mb-15 pl-50">
                                    <label for="tstat">
                                      Test Result Status
                                    </label>
                                    <select
                                      className="form-control"
                                      name="tstat"
                                      id="tstat"
                                    >
                                      <option className="pl-20" selected>
                                        --Select--
                                      </option>
                                      <option value="Fount">
                                        Found - Conclusive
                                      </option>
                                      <option value="Not Found">
                                        Not Found - Inconclusive
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <hr />
                              <div className="form-group">
                                <div className="form-row">
                                  <div className="col-md-6 mb-15 pr-50">
                                    <label for="tname">Disease Name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="tname"
                                      name="tname"
                                      placeholder="e.g. Diabetes"
                                    />
                                  </div>
                                  <div className="col-md-6 mb-15 pl-50">
                                    <label for="ttype">Disease Type</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="ttype"
                                      name="ttype"
                                      placeholder="e.g. Type II"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="form-row">
                                  <div className="col-md-12 mb-15 pl-50">
                                    <label for="tdesc">
                                      Disease Description
                                    </label>
                                    <textarea
                                      rows="3"
                                      type="text"
                                      className="form-control"
                                      name="tdesc"
                                      id="tdesc"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="form-row">
                                  <div className="col-md-12 mb-15 pl-50">
                                    <label for="tadv">Doctor's Advice</label>
                                    <textarea
                                      rows="3"
                                      type="text"
                                      className="form-control"
                                      name="tadv"
                                      id="tadv"
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
                                  Diagnosis
                                </button>
                              </div>
                              <input
                                type="hidden"
                                name="pcomp"
                                value="Diagnosed"
                              />
                              <input
                                type="hidden"
                                name="MM_insert"
                                value="regform"
                              />
                            </form>
                          </div>
                        </TabPanel>

                        <TabPanel>
                          <div
                            id="nav-about"
                            role="tabpanel"
                            aria-labelledby="nav-about-tab"
                          >
                            <br></br>
                            <p>
                              <b className="text-primary">
                                Total Number of Days for Treatment:
                              </b>{" "}
                              10
                            </p>
                            <p>
                              <b className="text-primary">
                                Recommended Prescription:
                              </b>{" "}
                              Amoxillin 500g Tablet - Twice a Day for 5days,
                              Paracetamol 500g Tablet - Thrice a Day for 7days.
                            </p>
                            <hr />
                            <form
                              className=""
                              method="POST"
                              action="<?php echo $editFormAction; ?>"
                              id="regform"
                              name="regform"
                              enctype="multipart/form-data"
                            >
                              <div className="form-group">
                                <div className="form-row">
                                  <div className="col-md-12 mb-15 pl-50">
                                    <label for="rno">
                                      Total Number of Days for Treatment
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="rno"
                                      id="rno"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="form-row">
                                  <div className="col-md-12 mb-15 pl-50">
                                    <label for="rpresc">
                                      Recommended Prescription
                                    </label>
                                    <select
                                      className="form-control"
                                      name="rpresc"
                                      id="rpresc"
                                      multiple
                                    >
                                      <option className="pl-20" selected>
                                        --Select--
                                      </option>
                                      <option value="Amoxillin 500g Tablet">
                                        Amoxillin 500g Tablet
                                      </option>
                                      <option value="Paracetamol 500g Tablet">
                                        Paracetamol 500g Tablet
                                      </option>
                                    </select>
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
                                  Prescription
                                </button>
                              </div>

                              <input
                                type="hidden"
                                name="pcomp"
                                value="Prescription Sent"
                              />
                              <input
                                type="hidden"
                                name="MM_insert"
                                value="regform"
                              />
                            </form>
                          </div>
                        </TabPanel>

                        <TabPanel>
                          <div
                            id="nav-recommend"
                            role="tabpanel"
                            aria-labelledby="nav-recommend-tab"
                          >
                            <br></br>
                            <p>
                              <b className="text-primary">
                                General Recommendation:
                              </b>{" "}
                              Et et consectetur ipsum labore excepteur est
                              proident excepteur ad velit occaecat qui minim
                              occaecat veniam. Fugiat veniam incididunt anim
                              aliqua enim pariatur veniam sunt est aute sit
                              dolor anim. Velit non irure adipisicing aliqua
                              ullamco irure incididunt irure non esse
                              consectetur nostrud minim non minim occaecat. Amet
                              duis do nisi duis veniam non est eiusmod tempor
                              incididunt tempor dolor ipsum in qui sit.
                              Exercitation mollit sit culpa nisi culpa non
                              adipisicing reprehenderit do dolore. Duis
                              reprehenderit occaecat anim ullamco ad duis
                              occaecat ex.
                            </p>
                            <p>
                              <b className="text-primary">
                                Recommended Groceries:
                              </b>{" "}
                              Brown Rice, Brown Sugar, Green Smoothie.
                            </p>
                            <p>
                              <b className="text-primary">
                                Recommended Support Groups:
                              </b>{" "}
                              Motivation, General.
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
                                    <label for="grec">
                                      General Recommendation
                                    </label>
                                    <textarea
                                      rows="3"
                                      type="text"
                                      className="form-control"
                                      name="grec"
                                      id="grec"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="form-row">
                                  <div className="col-md-12 mb-15 pl-50">
                                    <label for="rgroc">
                                      Recommended Groceries
                                    </label>
                                    <select
                                      className="form-control"
                                      name="rgroc"
                                      id="rgroc"
                                      multiple
                                    >
                                      <option className="pl-20" selected>
                                        --Select--
                                      </option>
                                      <option value="Brown Rice">
                                        Brown Rice
                                      </option>
                                      <option value="Brown Sugar">
                                        Brown Sugar
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="form-row">
                                  <div className="col-md-12 mb-15 pl-50">
                                    <label for="rsupp">
                                      Recommended Support Groups
                                    </label>
                                    <select
                                      className="form-control"
                                      name="rsupp"
                                      id="rsupp"
                                      multiple
                                    >
                                      <option className="pl-20" selected>
                                        --Select--
                                      </option>
                                      <option value="General">General</option>
                                      <option value="AA">AA</option>
                                    </select>
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
                                  Recommendation
                                </button>
                              </div>

                              <input
                                type="hidden"
                                name="pcomp"
                                value="Consult Done"
                              />
                              <input
                                type="hidden"
                                name="MM_insert"
                                value="regform"
                              />
                            </form>
                          </div>
                        </TabPanel>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <br></br>
            <br></br>
          </div>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchConsultation: (id) => dispatch(fetchConsultation(id)),
  };
};
export default connect(selectors, mapDispatchToProps)(ConsultDetails);
