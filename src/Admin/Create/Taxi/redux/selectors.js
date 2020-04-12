import { createSelector, createStructuredSelector } from "reselect";

const taxis = (obj = {}) => obj.taxis;

const data = (obj = {}) => obj.data;

const getTaxis = createSelector(taxis, data);

const isLoading = createSelector(taxis, (obj) => obj.isLoading);

const errorLoading = createSelector(taxis, (obj) => obj.errorLoading);

const selectors = createStructuredSelector({
  taxis: getTaxis,
  isLoading,
  errorLoading,
});

export default selectors;
