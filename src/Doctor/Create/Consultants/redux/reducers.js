import {
  FETCH_CONSULTATION_FAILURE,
  FETCH_CONSULTATION_SUCCESS,
  FETCH_CONSULTATIONS_FAILURE,
  FETCH_CONSULTATIONS_SUCCESS,
  FETCHING_CONSULTATIONS,
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
  consultation: {},
  errorLoading: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCHING_CONSULTATIONS:
      return {
        ...state,
        isLoading: true,
        errorLoading: false,
      };
    case FETCH_CONSULTATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...action.payload],
      };
    case FETCH_CONSULTATIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorLoading: true,
      };
    case FETCH_CONSULTATION_SUCCESS:
      return {
        ...state,
        consultation: { ...action.payload },
        isLoading: false,
      };
    case FETCH_CONSULTATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorLoading: true,
      };
    default:
      return state;
  }
};
