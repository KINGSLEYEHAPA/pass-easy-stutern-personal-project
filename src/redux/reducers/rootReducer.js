import { combineReducers } from "redux";
import dictionaryReducer from "./dictionaryReducers";
import newsReducer from "./newsReducer";
import questionBankReducer from "./questionBankReducer";

const rootReducer = combineReducers({
  question: questionBankReducer,
  dictionary: dictionaryReducer,
  news: newsReducer,
});
export default rootReducer;
