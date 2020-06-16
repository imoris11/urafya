import { createStructuredSelector, createSelector } from "reselect";
const supportGroups = (obj = {}) => obj.supportGroups;
const supportGroupsData = (obj = {}) => obj.data;

const getSupportGroupData = createSelector(supportGroups, supportGroupsData);

const isLoading = createSelector(supportGroups, (obj) => obj.isLoading);

const errorLoading = createSelector(supportGroups, (obj) => obj.errorLoading);

const group = createSelector(supportGroups, (obj) => obj.group)

const selectors = createStructuredSelector({
  supportGroups: getSupportGroupData,
  isLoading,
  group,
  errorLoading,
});

export default selectors;
