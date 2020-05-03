import {
  FETCH_CONSULTATION_FAILURE,
  FETCH_CONSULTATION_SUCCESS,
  FETCH_CONSULTATIONS_FAILURE,
  FETCH_CONSULTATIONS_SUCCESS,
  FETCHING_CONSULTATIONS,
  CREATING_EVALUATION,
  CREATE_EVALUATION_SUCCESS,
  CREATE_EVALUATION_FAILURE,
  CREATING_DIAGNOSIS,
  CREATE_DIAGNOSIS_SUCCESS,
  CREATE_DIAGNOSIS_FAILURE,
  CREATING_PRESCRIPTION,
  CREATE_PRESCRIPTION_SUCCESS,
  CREATE_PRESCRIPTION_FAILURE,
  CREATING_RECOMMENDATION,
  CREATE_RECOMMENDATION_SUCCESS,
  CREATE_RECOMMENDATION_FAILURE,
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
    case CREATING_EVALUATION:
      return {
        ...state,
        creatingEvaluation: true,
        errorCreatingEvaluation: false,
      };
    case CREATE_EVALUATION_SUCCESS:
      return {
        ...state,
        creatingEvaluation: false,
        consultation: {
          ...state.consultation,
          evaluation: {
            ...state.consultation.evaluation,
            ...action.payload,
          },
        },
      };
    case CREATE_EVALUATION_FAILURE:
      return {
        ...state,
        creatingEvaluation: false,
        errorCreatingEvaluation: true,
      };
    case CREATING_DIAGNOSIS:
      return {
        ...state,
        creatingDiagnosis: true,
        errorCreatingDiagnosis: false,
      };
    case CREATE_DIAGNOSIS_SUCCESS:
      return {
        ...state,
        creatingDiagnosis: false,
        consultation: {
          ...state.consultation,
          diagnosis: {
            ...state.consultation.diagnosis,
            ...action.payload,
          },
        },
      };
    case CREATE_DIAGNOSIS_FAILURE:
      return {
        ...state,
        creatingDiagnosis: false,
        errorCreatingDiagnosis: true,
      };
    case CREATING_PRESCRIPTION:
      return {
        ...state,
        creatingPrescription: true,
      };
    case CREATE_PRESCRIPTION_SUCCESS:
      return {
        ...state,
        creatingPrescription: false,
        consultation: {
          ...state.consultation,
          prescription: {
            ...state.consultation.prescription,
            ...action.payload,
          },
        },
      };
    case CREATE_PRESCRIPTION_FAILURE:
      return {
        ...state,
        creatingPrescription: false,
      };

    case CREATING_RECOMMENDATION:
      return {
        ...state,
        creatingRecommendation: true,
      };
    case CREATE_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        creatingRecommendation: false,
        consultation: {
          ...state.consultation,
          recommendation: {
            ...state.consultation.recommendation,
            ...action.payload,
          },
        },
      };
    case CREATE_RECOMMENDATION_FAILURE:
      return {
        ...state,
        creatingRecommendation: false,
      };
    default:
      return state;
  }
};
