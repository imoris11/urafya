import { createStructuredSelector, createSelector } from "reselect";
import { getUser } from "../../../Authenication/redux/selectors";
const categories = (obj = {}) => obj.categories;
const categoriesData = (obj = {}) => obj.data;

export const getCategoriesData = createSelector(categories, categoriesData);

export const isLoading = createSelector(categories, (obj) => obj.isLoading);

const errorLoading = createSelector(categories, (obj) => obj.errorLoading);

const userType = createSelector(getUser, (obj) => obj.role)
const selectors = createStructuredSelector({
  categories: getCategoriesData,
  isLoading,
  errorLoading,
  userType
});

export default selectors;
