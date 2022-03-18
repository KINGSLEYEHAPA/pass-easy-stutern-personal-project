import { combineReducers } from "redux";
import questionBankReducer from "./questionBanklReducer";

const rootReducer = combineReducers({
  question: questionBankReducer,
});
export default rootReducer;
