import {
  FETCHING_GROCERIES,
  FETCH_GROCERIES_SUCCESS,
  FETCH_GROCERIES_FAILURE,
  DELETE_GROCERY_SUCCESS,
  BAN_GROCERY_SUCCESS,
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
  errorLoading: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCHING_GROCERIES:
      return {
        ...state,
        isLoading: true,
        errorLoading: false,
      };
    case FETCH_GROCERIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...action.payload],
      };
    case FETCH_GROCERIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorLoading: true,
      };
    case DELETE_GROCERY_SUCCESS:
      return {
        ...state,
        data: state.data.filter((d) => d._id !== action.payload),
      };
    case BAN_GROCERY_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
      };
    default:
      return state;
  }
};
