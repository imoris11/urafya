export const FETCH_SYMPTOMS = "FETCH_SYMPTOMS";
export const FETCH_SYMPTOMS_SUCCESS = "FETCH_SYMPTOMS_SUCCESS";
export const FETCH_SYMPTOMS_FAILURE = "FETCH_SYMPTOMS_FAILURE";
export const DELETE_SYMPTOMS = "DELETE_SYMPTOMS";
export const DELETE_SYMPTOMS_SUCCESS = "DELETE_SYMPTOMS_SUCCESS";
export const FETCHING_SYMPTOMS = "FETCHING_SYMPTOMS";
export const CREATE_SYMPTOM = "CREATE_SYMPTOM";
export const CREATE_SYMPTOM_SUCCESS = "CREATE_SYMPTOM_SUCCESS";
export const CREATE_SYMPTOM_FAILURE = "CREATE_SYMPTOM_FAILURE";
export const CREATING_SYMPTOM = "CREATING_SYMPTOM";

export const fetchSymptoms = () => ({
  type: FETCH_SYMPTOMS,
});

export const deleteSymptom = (id) => ({
  type: DELETE_SYMPTOMS,
  payload: id,
});

export const createSymptoms = (payload) => ({
  type: CREATE_SYMPTOM,
  payload,
});
