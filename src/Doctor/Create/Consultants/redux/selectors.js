import { createSelector, createStructuredSelector } from "reselect";

const consultations = (obj = {}) => obj.consultations;

const data = (obj = {}) => obj.data;

export const getSymptoms = createSelector(consultations, data);

const isLoading = createSelector(consultations, (obj) => obj.isLoading);

const errorLoading = createSelector(consultations, (obj) => obj.errorLoading);

const consultation = createSelector(consultations, (obj) => obj.consultation);

const selectors = createStructuredSelector({
  consultations: getSymptoms,
  consultation,
  isLoading,
  errorLoading,
});

export default selectors;
