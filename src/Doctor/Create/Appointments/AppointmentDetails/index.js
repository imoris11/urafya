import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { connect } from "react-redux";
import selectors from "../redux/selectors";
import PropTypes from "prop-types";
import { fetchAppointment, createAppointment } from "../redux/actions";

class AppointmentDetails extends Component {
  state = {};
  static propTypes = {
    fetchAppointment: PropTypes.func.isRequired,
    createAppointment: PropTypes.func.isRequired,
    appointment: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorLoading: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    isLoading: true,
  };

  componentDidMount() {
    this.props.fetchAppointment(this.props.match.params.id);
  }

  getAge = (dob) => {
    const birthYear = dob && dob.split("-")[0];
    const currentYear = new Date().getFullYear();
    return currentYear - Number(birthYear);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const {
      consultationTime,
      consultationDay,
      testDescription,
      consultationMethod,
    } = this.state;
    const data = {
      id: this.props.match.params.id,
      appointment: {
        consultationDate: consultationDay,
        consultationTime,
        consultationMethod,
        testDescription,
      },
    };
    this.props.createAppointment(data);
  };

  render() {
    const { isLoading, appointment } = this.props;
    return (
      <div>
        {isLoading ? (
          <p className="tex-center text-info">Loading</p>
        ) : (
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800"> Patient Appointment</h1>
              </div>
              <div className="mycard card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="mycard card border-left-success shadow py-2">
                        {appointment.dateCreated && (
                          <img
                            src={appointment.patient.biodata.general.imageUri}
                            className="card-img-top"
                            alt="user profile"
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-xl-9 col-md-6">
                      {appointment.dateCreated && (
                        <p>
                          <b className="text-primary">Fullname:</b>
                          {appointment.patient.biodata.general.firstName}{" "}
                          {appointment.patient.biodata.general.lastName}
                          <br></br>
                          <b className="text-primary">Gender:</b>{" "}
                          {appointment.patient.gender}
                          <br></br>
                          <b className="text-primary">Age:</b>{" "}
                          {this.getAge(appointment.patient.biodata.general.dob)}
                        yrs
                          <br></br>
                          <b className="text-primary">Phone Number:</b>
                          {appointment.patient.phoneNumber}
                          <br></br>
                          {/* <b className="text-primary">Height:</b> 5'7inch
                        <br></br>
                        <b className="text-primary">weight:</b> 73kg
                        <br></br>
                        <b className="text-primary">Blood Pressure:</b> 23/26
                        <br></br>
                        <b className="text-primary">Sugar Level:</b> 40 */}
                          <br></br>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <br></br>
              <br></br>
              {appointment.dateCreated && (
                <div className="mycard card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xs-12 ">
                        <Tabs>
                          <TabList className="nav nav-tabs nav-fill" id="nav-tab">
                            <Tab className="nav-item nav-link btn-link2">
                              Details
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
                                  {appointment.symptoms.join(", ")}
                                </p>
                                <p>
                                  <b className="text-primary">
                                    Complaint Description:
                                </b>{" "}
                                  {appointment.detailedExplanation}
                                </p>
                                <hr />
                                <p>
                                  <b className="text-primary">
                                    Assigned Consultation Date:
                                </b>{" "}
                                  {appointment.consultationDate}
                                </p>
                                <p>
                                  <b className="text-primary">
                                    Assigned Consultation Time:
                                </b>{" "}
                                  {appointment.consultationTime}
                                </p>
                                <hr />
                                <form
                                  id="regform"
                                  name="regform"
                                  onSubmit={this.submitForm}
                                  encType="multipart/form-data"
                                >
                                  <div className="form-group">
                                    <div className="form-row">
                                      <div className="col-md-12 mb-15 pl-50">
                                        <label htmlFor="gen">
                                          Consultation Method
                                      </label>
                                        <select
                                          className="form-control"
                                          name="consultationMethod"
                                          onChange={this.handleChange}
                                          id="gen"
                                        >
                                          <option value="" className="pl-20">
                                            --Select--
                                        </option>
                                          <option value="Phone Call">
                                            Phone Call
                                        </option>
                                          <option value="Video Call">
                                            Video Call
                                        </option>
                                          <option value="Test">Test</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>

                                  <hr />
                                  <div className="form-group">
                                    <div className="form-row">
                                      <div className="col-md-6 mb-15 pr-50">
                                        <label htmlFor="doc">Date</label>
                                        <input
                                          type="date"
                                          className="form-control"
                                          id="doc"
                                          onChange={this.handleChange}
                                          name="consultationDay"
                                        />
                                      </div>
                                      <div className="col-md-6 mb-15 pl-50">
                                        <label htmlFor="ctime">Time:</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="ctime"
                                          onChange={this.handleChange}
                                          name="consultationTime"
                                          placeholder="e.g. 11:00 AM"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <div className="form-row">
                                      <div className="col-md-12 mb-15 pl-50">
                                        <label htmlFor="ctest">
                                          Test Description
                                      </label>
                                        <textarea
                                          rows="3"
                                          type="text"
                                          className="form-control"
                                          onChange={this.handleChange}
                                          name="testDescription"
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
    fetchAppointment: (id) => dispatch(fetchAppointment(id)),
    createAppointment: (payload) => dispatch(createAppointment(payload)),
  };
};
export default connect(selectors, mapDispatchToProps)(AppointmentDetails);
