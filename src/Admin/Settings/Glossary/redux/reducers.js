import {
  FETCHING_GLOSSARY,
  FETCH_GLOSSARY_FAILURE,
  FETCH_GLOSSARY_SUCCESS,
  CREATE_WORD_FAILURE,
  CREATE_WORD_SUCCESS,
  CREATING_WORD,
  UPDATING_WORD,
  UPDATE_WORD_FAILURE,
  UPDATE_WORD_SUCCESS,
  DELETE_WORD_SUCCESS,
} from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  errorLoading: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCHING_GLOSSARY:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_GLOSSARY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...action.payload],
      };
    case FETCH_GLOSSARY_FAILURE:
      return {
        ...state,
        errorLoading: true,
        isLoading: false,
      };
    case DELETE_WORD_SUCCESS:
      return {
        ...state,
        data: state.data.filter((word) => word._id !== action.payload),
      };
    case CREATE_WORD_SUCCESS:
      return {
        ...state,
        creatingWord: false,
        data: [...state.data, action.payload],
      };
    case CREATING_WORD:
      return {
        ...state,
        creatingWord: true,
      };
    case CREATE_WORD_FAILURE:
      return {
        ...state,
        creatingWord: false,
      };
    case UPDATING_WORD:
      return {
        ...state,
        updatingWord: true,
      };
    case UPDATE_WORD_SUCCESS:
      return {
        ...state,
        updatingWord: false,
      };
    case UPDATE_WORD_FAILURE:
      return {
        ...state,
        updatingWord: false,
      };
    default:
      return state;
  }
};
