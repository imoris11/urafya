import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { connect } from "react-redux";
import selectors from "../redux/selectors";
import {
  fetchConsultation,
  createEvaluation,
  createDiagnosis,
  createPrescription,
  createRecommendation,
} from "../redux/actions";
import PropTypes from "prop-types";
import moment from "moment";
import Select from "react-select";
class ConsultDetails extends Component {
  state = {
    options: [
      { value: "Brown Rice", label: "Brown Rice" },
      { value: "Brown Sugar", label: "Brown Sugar" },
    ],
    supportGroups: [
      { value: "General", label: "General" },
      { value: "AA", label: "AA" },
    ],
    prescriptions: [
      { value: "Paracetamol 500g Tablet", label: "Paracetamol 500g Tablet" },
      { value: "Amoxillin 500g Tablet", label: "Amoxillin 500g Tablet" },
    ],
    selectedOption: null,
  };
  static propTypes = {
    fetchConsultation: PropTypes.func.isRequired,
    consultation: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorLoading: PropTypes.bool.isRequired,
    createEvaluation: PropTypes.func.isRequired,
    creatingEvaluation: PropTypes.bool.isRequired,
    errorCreatingEvaluation: PropTypes.bool.isRequired,
    createDiagnosis: PropTypes.func.isRequired,
    creatingDiagnosis: PropTypes.bool.isRequired,
    errorCreatingDiagnosis: PropTypes.bool.isRequired,
    createPrescription: PropTypes.func.isRequired,
    creatingPrescription: PropTypes.bool.isRequired,
    createRecommendation: PropTypes.func.isRequired,
    creatingRecommendation: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    isLoading: true,
  };

  componentDidMount() {
    this.props.fetchConsultation(this.props.match.params.id);
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

  submitEvaluation = (e) => {
    e.preventDefault();
    const { doctorsFeedback } = this.state;
    const data = {
      id: this.props.match.params.id,
      evaluation: {
        doctorsFeedback,
      },
    };
    this.props.createEvaluation(data);
    this.setState({ doctorsFeedback: "" });
  };

  submitDiagnosis = (e) => {
    e.preventDefault();
    const {
      testStatusReport,
      diseaseName,
      diseaseType,
      diseaseDescription,
      doctorsAdvice,
    } = this.state;

    const data = {
      id: this.props.match.params.id,
      diagnosis: {
        testResultStatus: testStatusReport,
        diseaseName,
        diseaseType,
        diseaseDescription,
        doctorsAdvice,
      },
    };
    this.props.createDiagnosis(data);
  };

  submitPrescription = (e) => {
    e.preventDefault();
    let { recommendedPrescription, numberOfDaysForTreatment } = this.state;
    recommendedPrescription = recommendedPrescription.map(
      (prescription) => prescription.value
    );
    const data = {
      id: this.props.match.params.id,
      prescription: {
        recommendedPrescription,
        numberOfDaysForTreatment,
      },
    };
    this.props.createPrescription(data);
  };

  submitReccommendation = (e) => {
    e.preventDefault();
    let {
      generalRecommendation,
      recommendedGroceries,
      recommendedSupportGroups,
    } = this.state;

    recommendedGroceries = recommendedGroceries.map((grocery) => grocery.value);
    recommendedSupportGroups = recommendedSupportGroups.map(
      (group) => group.value
    );

    const data = {
      id: this.props.match.params.id,
      recommendation: {
        generalRecommendation,
        recommendedGroceries,
        recommendedSupportGroups,
      },
    };

    this.props.createRecommendation(data);
  };

  handleMultiSelect = (selectedOption) => {
    this.setState({ recommendedGroceries: selectedOption });
  };

  handleSupportGroups = (selectedOption) => {
    this.setState({ recommendedSupportGroups: selectedOption });
  };

  handlePrescription = (selectedOption) => {
    this.setState({ recommendedPrescription: selectedOption });
  };

  render() {
    const {
      isLoading,
      consultation,
      creatingEvaluation,
      creatingRecommendation,
      creatingDiagnosis,
      creatingPrescription,
    } = this.props;
    const {
      options,
      recommendedGroceries,
      supportGroups,
      recommendedSupportGroups,
      recommendedPrescription,
      prescriptions,
    } = this.state;
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
                            alt="patient"
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
                      <div className="col-xs-12 col-md-12 col-lg-12 ">
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
                              <hr />
                              <p>
                                <b className="text-primary">Doctor's Feedback:</b>{" "}
                                {consultation.evaluation.doctorsFeedback}
                              </p>
                              <hr />
                              <form
                                id="regform"
                                name="regform"
                                onSubmit={this.submitEvaluation}
                              >
                                <div className="form-group">
                                  <div className="form-row">
                                    <div className="col-md-12 mb-15 pl-50">
                                      <label htmlFor="dfeed">
                                        Doctor's Feedback Description
                                    </label>
                                      <textarea
                                        rows="3"
                                        type="text"
                                        value={this.state.doctorsFeedback || ""}
                                        className="form-control"
                                        onChange={this.handleChange}
                                        name="doctorsFeedback"
                                        id="dfeed"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>

                                <br />
                                <div className="d-flex">
                                  {creatingEvaluation ? (
                                    <button
                                      className="btn btn-primary mybtn"
                                      id="btnreg"
                                      disabled
                                      name="btnreg"
                                    >
                                      Updating...
                                    </button>
                                  ) : (
                                      <button
                                        type="submit"
                                        className="btn btn-primary mybtn"
                                        id="btnreg"
                                        name="btnreg"
                                      >
                                        <i className="fas fa-fw fa-file"></i> Submit
                                    Feedback
                                      </button>
                                    )}
                                </div>
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
                                {consultation.diagnosis.testStatusReport}
                              </p>
                              <p>
                                <b className="text-primary">Disease Name:</b>{" "}
                                {consultation.diagnosis.diseaseName}
                              </p>
                              <p>
                                <b className="text-primary">Disease Type:</b> Type
                              {consultation.diagnosis.diseaseType}
                              </p>
                              <p>
                                <b className="text-primary">
                                  Disease Description:
                              </b>{" "}
                                {consultation.diagnosis.diseaseDescription}
                              </p>
                              <p>
                                <b className="text-primary">Doctor's Advice:</b>{" "}
                                {consultation.diagnosis.doctorsAdvice}
                              </p>
                              <hr />
                              <form
                                onSubmit={this.submitDiagnosis}
                                id="regform"
                                name="regform"
                              >
                                <div className="form-group">
                                  <div className="form-row">
                                    <div className="col-md-12 mb-15 pl-50">
                                      <label htmlFor="tstat">
                                        Test Result Status
                                    </label>
                                      <select
                                        className="form-control"
                                        name="testStatusReport"
                                        onChange={this.handleChange}
                                        id="tstat"
                                      >
                                        <option value="" className="pl-20">
                                          --Select--
                                      </option>
                                        <option value="Found">
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
                                      <label htmlFor="tname">Disease Name</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="tname"
                                        onChange={this.handleChange}
                                        name="diseaseName"
                                        placeholder="e.g. Diabetes"
                                      />
                                    </div>
                                    <div className="col-md-6 mb-15 pl-50">
                                      <label htmlFor="ttype">Disease Type</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="ttype"
                                        onChange={this.handleChange}
                                        name="diseaseType"
                                        placeholder="e.g. Type II"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="form-row">
                                    <div className="col-md-12 mb-15 pl-50">
                                      <label htmlFor="tdesc">
                                        Disease Description
                                    </label>
                                      <textarea
                                        rows="3"
                                        type="text"
                                        className="form-control"
                                        name="diseaseDescription"
                                        onChange={this.handleChange}
                                        id="tdesc"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="form-row">
                                    <div className="col-md-12 mb-15 pl-50">
                                      <label htmlFor="tadv">
                                        Doctor's Advice
                                    </label>
                                      <textarea
                                        rows="3"
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleChange}
                                        name="doctorsAdvice"
                                        id="tadv"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>

                                <br />
                                <div className="d-flex">
                                  {creatingDiagnosis ? (
                                    <button
                                      disabled
                                      className="btn btn-primary mybtn"
                                      id="btnreg"
                                      name="btnreg"
                                    >
                                      Saving Diagnosis...
                                    </button>
                                  ) : (
                                      <button
                                        type="submit"
                                        className="btn btn-primary mybtn"
                                        id="btnreg"
                                        name="btnreg"
                                      >
                                        <i className="fas fa-fw fa-file"></i> Submit
                                    Diagnosis
                                      </button>
                                    )}
                                </div>
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
                                {
                                  consultation.prescription
                                    .numberOfDaysForTreatment
                                }
                              </p>
                              <p>
                                <b className="text-primary">
                                  Recommended Prescription:
                              </b>{" "}
                                {consultation.prescription.recommendedPrescription.join(
                                  ", "
                                )}
                              </p>
                              <hr />
                              <form
                                id="regform"
                                name="regform"
                                onSubmit={this.submitPrescription}
                              >
                                <div className="form-group">
                                  <div className="form-row">
                                    <div className="col-md-12 mb-15 pl-50">
                                      <label htmlFor="rno">
                                        Total Number of Days for Treatment
                                    </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleChange}
                                        name="numberOfDaysForTreatment"
                                        id="rno"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="form-row">
                                    <div className="col-md-12 mb-15 pl-50">
                                      <label htmlFor="rpresc">
                                        Recommended Prescription
                                    </label>
                                      <Select
                                        value={recommendedPrescription}
                                        name="recommendedPrescription"
                                        onChange={this.handlePrescription}
                                        options={prescriptions}
                                        isMulti={true}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <br />
                                <div className="d-flex">
                                  {creatingPrescription ? (
                                    <button
                                      disabled
                                      className="btn btn-primary mybtn"
                                      id="btnreg"
                                      name="btnreg"
                                    >
                                      Saving Prescription...
                                    </button>
                                  ) : (
                                      <button
                                        type="submit"
                                        className="btn btn-primary mybtn"
                                        id="btnreg"
                                        name="btnreg"
                                      >
                                        <i className="fas fa-fw fa-file"></i> Submit
                                    Prescription
                                      </button>
                                    )}
                                </div>
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
                                {
                                  consultation.recommendation
                                    .generalRecommendation
                                }
                              </p>
                              <p>
                                <b className="text-primary">
                                  Recommended Groceries:
                              </b>{" "}
                                {consultation.recommendation.recommendedGroceries.join(
                                  ", "
                                )}
                              </p>
                              <p>
                                <b className="text-primary">
                                  Recommended Support Groups:
                              </b>{" "}
                                {consultation.recommendation.recommendedSupportGroups.join(
                                  ", "
                                )}
                              </p>
                              <hr />
                              <form
                                onSubmit={this.submitReccommendation}
                                id="regform"
                                name="regform"
                              >
                                <div className="form-group">
                                  <div className="form-row">
                                    <div className="col-md-12 mb-15 pl-50">
                                      <label htmlFor="grec">
                                        General Recommendation
                                    </label>
                                      <textarea
                                        rows="3"
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleChange}
                                        name="generalRecommendation"
                                        id="grec"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="form-row">
                                    <div className="col-md-12 mb-15 pl-50">
                                      <label htmlFor="rgroc">
                                        Recommended Groceries
                                    </label>
                                      <Select
                                        value={recommendedGroceries}
                                        name="recommendedGroceries"
                                        onChange={this.handleMultiSelect}
                                        options={options}
                                        isMulti={true}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="form-row">
                                    <div className="col-md-12 mb-15 pl-50">
                                      <label htmlFor="rsupp">
                                        Recommended Support Groups
                                    </label>
                                      <Select
                                        value={recommendedSupportGroups}
                                        name="recommendedSupportGroups"
                                        onChange={this.handleSupportGroups}
                                        options={supportGroups}
                                        isMulti={true}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <br />
                                <div className="d-flex">
                                  {creatingRecommendation ? (
                                    <button
                                      disabled
                                      className="btn btn-primary mybtn"
                                      id="btnreg"
                                      name="btnreg"
                                    >
                                      Saving Recommendation...
                                    </button>
                                  ) : (
                                      <button
                                        type="submit"
                                        className="btn btn-primary mybtn"
                                        id="btnreg"
                                        name="btnreg"
                                      >
                                        <i className="fas fa-fw fa-file"></i> Submit
                                    Recommendation
                                      </button>
                                    )}
                                </div>
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
    createEvaluation: (payload) => dispatch(createEvaluation(payload)),
    createDiagnosis: (payload) => dispatch(createDiagnosis(payload)),
    createPrescription: (payload) => dispatch(createPrescription(payload)),
    createRecommendation: (payload) => dispatch(createRecommendation(payload)),
  };
};
export default connect(selectors, mapDispatchToProps)(ConsultDetails);
