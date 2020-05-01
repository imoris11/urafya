import { all } from "redux-saga/effects";
import authSagas from "./Authenication/redux/saga";
import usersSaga from "./Admin/Create/Users/redux/saga";
import emergencySagas from "./Admin/Create/Emergency/redux/saga";
import groceriesSagas from "./Admin/Store/Grocery/redux/saga";
import taxiSagas from "./Admin/Create/Taxi/redux/saga";
import prescriptionSagas from "./Admin/Store/Prescription/redux/saga";
import glossarySagas from "./Admin/Settings/Glossary/redux/saga";
import aboutSagas from "./shared/About/redux/saga";
import symptomsSagas from "./Doctor/Create/Symptoms/redux/saga";
import appointmentsSagas from "./Doctor/Create/Appointments/redux/saga";
import consultationsSagas from "./Doctor/Create/Consultants/redux/saga";

function* rootSaga() {
  yield all([
    authSagas(),
    usersSaga(),
    emergencySagas(),
    groceriesSagas(),
    taxiSagas(),
    prescriptionSagas(),
    glossarySagas(),
    aboutSagas(),
    symptomsSagas(),
    appointmentsSagas(),
    consultationsSagas(),
  ]);
}

export default rootSaga;
