import { createStructuredSelector, createSelector } from "reselect";
const emergencyLines = (obj = {}) => obj.emergencyLines;
const emergencyData = (obj = {}) => obj.data;

const getEmergencyData = createSelector(emergencyLines, emergencyData);

const isLoading = createSelector(emergencyLines, (obj) => obj.isLoading);

const errorLoading = createSelector(emergencyLines, (obj) => obj.errorLoading);

const selectors = createStructuredSelector({
  emergencyLines: getEmergencyData,
  isLoading,
  errorLoading,
});

export default selectors;
