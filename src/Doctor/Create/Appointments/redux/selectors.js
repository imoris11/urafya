import { createSelector, createStructuredSelector } from "reselect";

const appointments = (obj = {}) => obj.appointments;

const data = (obj = {}) => obj.data;

export const getSymptoms = createSelector(appointments, data);

const isLoading = createSelector(appointments, (obj) => obj.isLoading);

const errorLoading = createSelector(appointments, (obj) => obj.errorLoading);

const appointment = createSelector(appointments, (obj) => obj.appointment);

const selectors = createStructuredSelector({
  appointments: getSymptoms,
  isLoading,
  appointment,
  errorLoading,
});

export default selectors;
