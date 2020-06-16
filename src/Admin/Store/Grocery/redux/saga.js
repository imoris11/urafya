import { put, call, takeEvery, select } from "redux-saga/effects";
import {
  FETCH_GROCERIES,
  FETCH_GROCERIES_SUCCESS,
  FETCH_GROCERIES_FAILURE,
  FETCHING_GROCERIES,
  BAN_GROCERY,
  BAN_GROCERY_FAILURE,
  BAN_GROCERY_SUCCESS,
} from "./actions";
import { toast } from "react-toastify";
import makeApiRequest from "../../../../utils";
import { getUserToken } from "../../../../Authenication/redux/selectors";
import { getGroceries } from "./selectors";

const getConfig = (token, method = "GET") => ({
  method,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ token }`,
  },
});

export function* fetchGroceries() {
  yield put({
    type: FETCHING_GROCERIES,
  });
  try {
    const token = yield select(getUserToken);
    const config = getConfig(token);
    const response = yield call(
      makeApiRequest,
      "/groceries/all-groceries",
      config
    );
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

export function* getUpdatedGroceries(id) {
  let groceries = yield select(getGroceries);
  let index = -1;
  const grocery = groceries.filter((g, idx) => {
    if (g._id === id) {
      index = idx;
      return g;
    }
    return null
  })[0];

  grocery["status"] =
    grocery.status === "Approved" ? "Not Approved" : "Approved";
  groceries[index] = grocery;
  return groceries;
}
export function* toggleGroceryBan(action) {
  const token = yield select(getUserToken);
  const config = getConfig(token, "POST");
  try {
    const response = yield call(
      makeApiRequest,
      `/groceries/ban-permit-groceries/${ action.payload }`,
      config
    );
    const updatedGroceries = yield call(getUpdatedGroceries, action.payload);
    yield put({
      type: BAN_GROCERY_SUCCESS,
      payload: updatedGroceries,
    });
    toast.success(response.message);
  } catch (error) {
    yield put({
      type: BAN_GROCERY_FAILURE,
    });
    toast.error(error.message);
  }
}

function* groceriesSagas() {
  yield takeEvery(FETCH_GROCERIES, fetchGroceries);
  yield takeEvery(BAN_GROCERY, toggleGroceryBan);
}

export default groceriesSagas;
