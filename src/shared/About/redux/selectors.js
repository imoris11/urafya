import { createSelector, createStructuredSelector } from "reselect";
const appInfo = (obj = {}) => obj.appInfo;

const about = (obj = {}) => obj.about;

export const getAbout = createSelector(appInfo, about);
const isLoading = createSelector(appInfo, (obj) => obj.isLoading);

const errorLoading = createSelector(appInfo, (obj) => obj.errorLoading);

const selectors = createStructuredSelector({
  about: getAbout,
  isLoading,
  errorLoading,
});

export default selectors;
