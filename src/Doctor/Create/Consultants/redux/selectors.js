import { createSelector, createStructuredSelector } from "reselect";

const consultations = (obj = {}) => obj.consultations;

const data = (obj = {}) => obj.data;

export const getSymptoms = createSelector(consultations, data);

const isLoading = createSelector(consultations, (obj) => obj.isLoading);

const errorLoading = createSelector(consultations, (obj) => obj.errorLoading);

const consultation = createSelector(consultations, (obj) => obj.consultation);

const creatingEvaluation = createSelector(
  consultations,
  (obj) => obj.creatingEvaluation || false
);

const errorCreatingEvaluation = createSelector(
  consultations,
  (obj) => obj.errorCreatingEvaluation || false
);

const creatingDiagnosis = createSelector(
  consultations,
  (obj) => obj.creatingDiagnosis || false
);

const creatingPrescription = createSelector(
  consultations,
  (obj) => obj.creatingPrescription || false
);

const errorCreatingDiagnosis = createSelector(
  consultations,
  (obj) => obj.errorCreatingDiagnosis || false
);

const creatingRecommendation = createSelector(
  consultations,
  (obj) => obj.creatingRecommendation || false
);

const selectors = createStructuredSelector({
  consultations: getSymptoms,
  consultation,
  isLoading,
  errorLoading,
  creatingEvaluation,
  errorCreatingEvaluation,
  creatingDiagnosis,
  errorCreatingDiagnosis,
  creatingPrescription,
  creatingRecommendation,
});

export default selectors;
