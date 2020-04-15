import { all } from "redux-saga/effects";
import authSagas from "./Authenication/redux/saga";
import usersSaga from "./Admin/Create/Users/redux/saga";
import emergencySagas from "./Admin/Create/Emergency/redux/saga";
import groceriesSagas from "./Admin/Store/Grocery/redux/saga";
import taxiSagas from "./Admin/Create/Taxi/redux/saga";
import prescriptionSagas from "./Admin/Store/Prescription/redux/saga";

function* rootSaga() {
  yield all([
    authSagas(),
    usersSaga(),
    emergencySagas(),
    groceriesSagas(),
    taxiSagas(),
    prescriptionSagas(),
  ]);
}

export default rootSaga;
