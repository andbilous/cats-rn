import { combineReducers } from "redux";
import factsReducer from "./facts/reducer";

export const rootReducer = combineReducers({
  factsReducer,
});
