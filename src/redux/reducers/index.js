import { combineReducers } from "redux";

import tables from "./tables";
import pages from "./pages";

const rootReducer = combineReducers({ tables, pages });

export default rootReducer;
