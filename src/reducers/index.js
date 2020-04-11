import { combineReducers } from "redux";

// calling the default reducer to create a link
import defaultReducer from "./default-reducer";
import authReducer from "../Authenication/redux/reducer";

const rootReducers = combineReducers({
  // add reducer files references here
  default: defaultReducer,
  auth: authReducer,
});

export default rootReducers;
