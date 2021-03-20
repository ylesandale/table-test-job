import * as types from "../constants";
export const sortNumbers = (desc) => ({
  type: types.SORT_NUMBERS,
  desc,
});

export const sortFirst = (desc) => ({
  type: types.SORT_FIRST,
  desc,
});

export const sortLast = (desc) => ({
  type: types.SORT_LAST,
  desc,
});

export const search = (value) => ({
  type: types.SEARCH,
  value,
});
