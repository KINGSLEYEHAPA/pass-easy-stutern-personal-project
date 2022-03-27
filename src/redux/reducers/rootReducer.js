import { combineReducers } from "redux";
import dictionaryReducer from "./dictionaryReducers";
import newsReducer from "./newsReducer";
import performanceReducer from "./performanceReducer";
import questionBankReducer from "./questionBankReducer";

const rootReducer = combineReducers({
  question: questionBankReducer,
  dictionary: dictionaryReducer,
  news: newsReducer,
  performance: performanceReducer,
});
export default rootReducer;
