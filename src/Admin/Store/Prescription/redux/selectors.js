import { createSelector, createStructuredSelector } from "reselect";

const prescriptions = (obj = {}) => obj.prescriptions;

const data = (obj = {}) => obj.data;

export const getPrescriptions = createSelector(prescriptions, data);

const isLoading = createSelector(prescriptions, (obj) => obj.isLoading);

const errorLoading = createSelector(prescriptions, (obj) => obj.errorLoading);
const selectors = createStructuredSelector({
  prescriptions: getPrescriptions,
  isLoading,
  errorLoading,
});

export default selectors;
