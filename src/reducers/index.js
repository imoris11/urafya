import { combineReducers } from "redux";

// calling the default reducer to create a link
import authReducer from "../Authenication/redux/reducer";
import usersReducer from "../Admin/Create/Users/redux/reducers";
import emergencyReducer from "../Admin/Create/Emergency/redux/reducers";
import groceriesReducer from "../Admin/Store/Grocery/redux/reducers";
import taxiReducer from "../Admin/Create/Taxi/redux/reducers";

const rootReducers = combineReducers({
  // add reducer files references here
  auth: authReducer,
  allUsers: usersReducer,
  emergencyLines: emergencyReducer,
  groceries: groceriesReducer,
  taxis: taxiReducer,
});

export default rootReducers;
