import {
  FETCH_APPOINTMENTS_SUCCESS,
  FETCHING_APPOINTMENTS,
  FETCH_APPOINTMENTS_FAILURE,
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
  errorLoading: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCHING_APPOINTMENTS:
      return {
        ...state,
        isLoading: true,
        errorLoading: false,
      };
    case FETCH_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...action.payload],
      };
    case FETCH_APPOINTMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorLoading: true,
      };
    default:
      return state;
  }
};
