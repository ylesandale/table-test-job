import * as types from "../constants";
const initialState = {
  currentPage: 1,
  postsPerPage: 50,
  currentTables: [],
  sortNumbers: true,
  sortFirst: true,
  sortLast: true,
  inputValue: "",
};

const pages = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.number };

    case types.SET_INPUT_VALUE:
      return { ...state, inputValue: action.value };
    default:
      return state;
  }
};

export default pages;
