import { put, call, takeEvery, select } from "redux-saga/effects";
import {
  FETCHING_PRESCRIPTIONS,
  FETCH_PRESCRIPTIONS_SUCCESS,
  FETCH_PRESCRIPTIONS_FAILURE,
  FETCH_PRESCRIPTIONS,
  BAN_PRESCRIPTION,
  BAN_PRESCRIPTION_SUCCESS,
} from "./actions";
import { toast } from "react-toastify";
import makeApiRequest from "../../../../utils";
import { getUserToken } from "../../../../Authenication/redux/selectors";
import { getPrescriptions } from "./selectors";

const getConfig = (token, method = "GET") => ({
  method,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ token }`,
  },
});

export function* fetchPrescriptions() {
  yield put({
    type: FETCHING_PRESCRIPTIONS,
  });
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token);
    const response = yield call(
      makeApiRequest,
      "/drug/all-prescriptions",
      config
    );

    yield put({
      type: FETCH_PRESCRIPTIONS_SUCCESS,
      payload: response.prescriptions,
    });
  } catch (error) {
    yield put({
      type: FETCH_PRESCRIPTIONS_FAILURE,
    });
    toast.error(error.message);
  }
}

export function* updatePrescriptions(id) {
  let prescriptions = yield select(getPrescriptions);
  let index = -1;
  const prescription = prescriptions.filter((g, idx) => {
    if (g._id === id) {
      index = idx;
      return g;
    }
    return null
  })[0];

  prescriptions["status"] =
    prescription.status === "Approved" ? "Not Approved" : "Approved";
  prescriptions[index] = prescription;
  return prescriptions;
}
export function* toggleBan(action) {
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token, "POST");
    const response = yield call(
      makeApiRequest,
      `/drug/ban-permit-prescription/${ action.payload }`,
      config
    );
    const updatedPrescriptions = yield call(
      updatePrescriptions,
      action.payload
    );
    yield put({
      type: BAN_PRESCRIPTION_SUCCESS,
      payload: updatedPrescriptions,
    });
    toast.success(response.message);
  } catch (error) {
    toast.error(error.message);
  }
}
function* prescriptionSagas() {
  yield takeEvery(FETCH_PRESCRIPTIONS, fetchPrescriptions);
  yield takeEvery(BAN_PRESCRIPTION, toggleBan);
}

export default prescriptionSagas;
