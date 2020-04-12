import {
  FETCHING_TAXIS,
  FETCH_TAXIS_SUCCESS,
  FETCH_TAXIS_FAILURE,
  DELETE_TAXIS_SUCCESS,
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
  errorLoading: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCHING_TAXIS:
      return {
        ...state,
        isLoading: true,
        errorLoading: false,
      };
    case FETCH_TAXIS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...action.payload],
      };
    case FETCH_TAXIS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorLoading: true,
      };
    case DELETE_TAXIS_SUCCESS:
      return {
        ...state,
        data: state.data.filter((d) => d._id !== action.payload),
      };
    default:
      return state;
  }
};
