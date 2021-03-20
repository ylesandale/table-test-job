import * as types from "../constants";
export const setCurrentPage = (number) => ({
  type: types.SET_CURRENT_PAGE,
  number,
});

export const setInputValue = (value) => ({
  type: types.SET_INPUT_VALUE,
  value,
});
