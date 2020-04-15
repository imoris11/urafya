import React, { Component } from "react";
import "./App.css";
import Login from "./Authenication/Login";
import ForgetPassword from "./Authenication/ForgetPassword";
import Ahome from "./shared/Home";
import Users from "./Admin/Create/Users/";
import Symptoms from "./Doctor/Create/Symptoms";
import Payment from "./Admin/Create/Payment/";
import Support from "./Admin/Create/Support/";
import Emergency from "./Admin/Create/Emergency";
import Taxi from "./Admin/Create/Taxi/";
import Grocery from "./Admin/Store/Grocery";
import Prescription from "./Admin/Store/Prescription";
import Glossary from "./Admin/Settings/Glossary/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./shared/About";
import Profile from "./shared/Profile";
import DoctorsPrescription from "./Pharmacist/DoctorsPrescription";
import PharmacistPrescription from "./Pharmacist/Prescription";
import PrescriptionDetails from "./Pharmacist/DoctorsPrescription/PrescriptionDetails";
import Consultants from "./Doctor/Create/Consultants";
import SupportGroup from "./Doctor/Create/SupportGroup";
import GeneralGroup from "./Doctor/Create/SupportGroup/GeneralSupport";
import GroupDetails from "./Doctor/Create/SupportGroup/GroupDetails";
import AdminHeader from "./Admin/components/Header";
import DoctorHeader from "./Doctor/components/Header";
import PharmacistHeader from "./Pharmacist/components/Header";
import ConsultDetails from "./Doctor/Create/Consultants/ConsultDetails";
import { connect } from "react-redux";
import { getUser, isLoggedIn } from "./Authenication/redux/selectors";

export class App extends Component {
  componentDidMount() {
    //Get from  user Type redux
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {this.props.loggedIn && this.props.user.role === "admin" && (
              <AdminHeader>
                <Route exact path="/" component={Ahome} />
                <Route exact path="/users" component={Users} />

                <Route exact path="/payment" component={Payment} />
                <Route exact path="/support" component={Support} />
                <Route exact path="/taxiservices" component={Taxi} />
                <Route exact path="/emergency" component={Emergency} />
                <Route exact path="/prescription" component={Prescription} />
                <Route exact path="/grocery" component={Grocery} />
                <Route exact path="/glossary" component={Glossary} />
                <Route exact path="/about" component={About} />
                <Route exact path="/profile" component={Profile} />
              </AdminHeader>
            )}

            {this.props.loggedIn && this.props.user.role === "pharmacist" && (
              <PharmacistHeader>
                <Route exact path="/" component={Ahome} />
                <Route
                  exact
                  path="/doctor/prescription"
                  component={DoctorsPrescription}
                />
                <Route
                  exact
                  path="/prescription"
                  component={PharmacistPrescription}
                />
                <Route exact path="/payment" component={Payment} />
                <Route exact path="/about" component={About} />
                <Route exact path="/profile" component={Profile} />
                <Route
                  exact
                  path="/prescriptiondetails"
                  component={PrescriptionDetails}
                />
              </PharmacistHeader>
            )}

            {this.props.loggedIn && this.props.user.role === "doctor" && (
              <DoctorHeader>
                <Route exact path="/" component={Ahome} />
                <Route exact path="/consultants" component={Consultants} />
                <Route exact path="/symptoms" component={Symptoms} />
                <Route exact path="/support" component={SupportGroup} />
                <Route exact path="/generalsupport" component={GeneralGroup} />
                <Route exact path="/groupdetails" component={GroupDetails} />
                <Route exact path="/about" component={About} />
                <Route exact path="/payment" component={Payment} />
                <Route exact path="/emergency" component={Emergency} />
                <Route exact path="/taxiservices" component={Taxi} />
                <Route exact path="/glossary" component={Glossary} />
                <Route exact path="/profile" component={Profile} />
                <Route
                  exact
                  path="/consultdetails"
                  component={ConsultDetails}
                />
              </DoctorHeader>
            )}
            <Route exact path="/" component={Login} />
            <Route exact path="/forgetpassword" component={ForgetPassword} />
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedIn: isLoggedIn(state),
    user: getUser(state),
  };
};
export default connect(mapStateToProps)(App);
