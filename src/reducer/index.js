import increaseDecrease from "./increaseDecrease";
import minutes from "./minutes";

import { combineReducers } from "redux";

const combineReducer = combineReducers({
  increaseDecrease,
  minutes,
});
export default combineReducer;
