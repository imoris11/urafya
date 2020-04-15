import {
  FETCHING_PRESCRIPTIONS,
  FETCH_PRESCRIPTIONS_FAILURE,
  FETCH_PRESCRIPTIONS_SUCCESS,
  BAN_PRESCRIPTION_SUCCESS,
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
  errorLoading: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCHING_PRESCRIPTIONS:
      return {
        ...state,
        isLoading: true,
        errorLoading: false,
      };
    case FETCH_PRESCRIPTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...action.payload],
      };
    case FETCH_PRESCRIPTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorLoading: true,
      };
    case BAN_PRESCRIPTION_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
      };
    default:
      return state;
  }
};
