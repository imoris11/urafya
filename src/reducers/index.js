import { combineReducers } from "redux";

// calling the default reducer to create a link
import authReducer from "../Authenication/redux/reducer";
import usersReducer from "../Admin/Create/Users/redux/reducers";
import emergencyReducer from "../Admin/Create/Emergency/redux/reducers";
import groceriesReducer from "../Admin/Store/Grocery/redux/reducers";
import taxiReducer from "../Admin/Create/Taxi/redux/reducers";
import prescriptionsReducer from "../Admin/Store/Prescription/redux/reducers";
import glossaryReducer from "../Admin/Settings/Glossary/redux/reducers";
import aboutReducer from "../shared/About/redux/reducers";
import symptomsReducer from "../Doctor/Create/Symptoms/redux/reducers";
import appointmentsReducer from "../Doctor/Create/Appointments/redux/reducers";

const rootReducers = combineReducers({
  // add reducer files references here
  auth: authReducer,
  allUsers: usersReducer,
  emergencyLines: emergencyReducer,
  groceries: groceriesReducer,
  taxis: taxiReducer,
  prescriptions: prescriptionsReducer,
  glossary: glossaryReducer,
  appInfo: aboutReducer,
  symptoms: symptomsReducer,
  appointments: appointmentsReducer,
});

export default rootReducers;
