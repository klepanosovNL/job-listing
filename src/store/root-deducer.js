import { combineReducers } from "redux";
import { positionReducer } from "./positions/positions-reducer";
import { filtersReducer } from "./filters/filters-reducer";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filtersReducer,
});
