import {
  FETCHING_SYMPTOMS,
  FETCH_SYMPTOMS_FAILURE,
  FETCH_SYMPTOMS_SUCCESS,
  CREATE_SYMPTOM_FAILURE,
  CREATE_SYMPTOM_SUCCESS,
  CREATING_SYMPTOM,
  DELETE_SYMPTOMS_SUCCESS,
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
  errorLoading: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCHING_SYMPTOMS:
      return {
        ...state,
        isLoading: true,
        errorLoading: false,
      };
    case FETCH_SYMPTOMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...action.payload],
      };
    case FETCH_SYMPTOMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorLoading: true,
      };
    case DELETE_SYMPTOMS_SUCCESS:
      return {
        ...state,
        data: state.data.filter((d) => d._id !== action.payload),
      };
    case CREATE_SYMPTOM_SUCCESS:
      return {
        ...state,
        creatingSymptom: false,
        data: [...state.data, action.payload],
      };
    case CREATING_SYMPTOM:
      return {
        ...state,
        creatingSymptom: true,
      };
    case CREATE_SYMPTOM_FAILURE:
      return {
        ...state,
        creatingSymptom: false,
      };
    default:
      return state;
  }
};
