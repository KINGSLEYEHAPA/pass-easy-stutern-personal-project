import { combineReducers } from "redux";
import dictionaryReducer from "./dictionaryReducers";
import questionBankReducer from "./questionBankReducer";

const rootReducer = combineReducers({
  question: questionBankReducer,
  dictionary: dictionaryReducer,
});
export default rootReducer;
