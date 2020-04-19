import { createSelector, createStructuredSelector } from "reselect";

const symptoms = (obj = {}) => obj.symptoms;

const data = (obj = {}) => obj.data;

export const getSymptoms = createSelector(symptoms, data);

const isLoading = createSelector(symptoms, (obj) => obj.isLoading);

const errorLoading = createSelector(symptoms, (obj) => obj.errorLoading);

const selectors = createStructuredSelector({
  symptoms: getSymptoms,
  isLoading,
  errorLoading,
});

export default selectors;
