import { put, call, takeEvery } from "redux-saga/effects";
import {
  FETCH_GROCERIES,
  FETCH_GROCERIES_SUCCESS,
  FETCH_GROCERIES_FAILURE,
  FETCHING_GROCERIES,
} from "./actions";
import { toast } from "react-toastify";
import makeApiRequest from "../../../../utils";

export function* fetchGroceries() {
  yield put({
    type: FETCHING_GROCERIES,
  });
  try {
    const response = yield call(makeApiRequest, "/groceries/all-groceries");
    if (response.statusCode === 200) {
      yield put({
        type: FETCH_GROCERIES_SUCCESS,
        payload: response.groceries,
      });
    } else {
      yield put({
        type: FETCH_GROCERIES_FAILURE,
      });
      toast.error("Encountered an error, please try again.");
    }
  } catch (error) {
    toast.error("Encountered an error, please try again");
  }
}

function* groceriesSagas() {
  yield takeEvery(FETCH_GROCERIES, fetchGroceries);
}

export default groceriesSagas;
