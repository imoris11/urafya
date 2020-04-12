import { combineReducers } from "redux";

// calling the default reducer to create a link
import defaultReducer from "./default-reducer";
import authReducer from "../Authenication/redux/reducer";
import usersReducer from "../Admin/Create/Users/redux/reducers";
import emergencyReducer from "../Admin/Create/Emergency/redux/reducers";

const rootReducers = combineReducers({
  // add reducer files references here
  default: defaultReducer,
  auth: authReducer,
  allUsers: usersReducer,
  emergencyLines: emergencyReducer,
});

export default rootReducers;
