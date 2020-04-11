import { all } from "redux-saga/effects";
import authSagas from "./Authenication/redux/saga";

function* rootSaga() {
  yield all([authSagas()]);
}

export default rootSaga;
