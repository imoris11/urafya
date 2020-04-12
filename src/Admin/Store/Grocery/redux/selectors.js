import { createSelector, createStructuredSelector } from "reselect";

const groceries = (obj = {}) => obj.groceries;

const data = (obj = {}) => obj.data;

const getGroceries = createSelector(groceries, data);

const isLoading = createSelector(groceries, (obj) => obj.isLoading);

const errorLoading = createSelector(groceries, (obj) => obj.errorLoading);
const selectors = createStructuredSelector({
  groceries: getGroceries,
  isLoading,
  errorLoading,
});

export default selectors;
