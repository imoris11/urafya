import {
  FETCHING_EMERGENCY_LINES,
  FETCHING_EMERGENCY_LINES_SUCCESS,
  FETCHING_EMERGENCY_LINES_FAILURE,
  EMERGENCY_LINE_DELETED,
  CREATING_HELPLINE,
  CREATE_HELPLINE_SUCCESS,
  CREATE_HELPLINE_FAILURE,
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
  errorLoading: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCHING_EMERGENCY_LINES:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_EMERGENCY_LINES_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
        isLoading: false,
        errorLoading: false,
      };
    case FETCHING_EMERGENCY_LINES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorLoading: true,
      };
    case EMERGENCY_LINE_DELETED:
      return {
        ...state,
        data: state.data.filter((e) => e._id !== action.payload),
        deleteSuccessful: true,
      };
    case CREATING_HELPLINE:
      return {
        ...state,
        creatingHelpline: true,
      };
    case CREATE_HELPLINE_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        creatingHelpline: false,
      };
    case CREATE_HELPLINE_FAILURE:
      return {
        ...state,
        creatingHelpline: false,
      };
    default:
      return state;
  }
};
