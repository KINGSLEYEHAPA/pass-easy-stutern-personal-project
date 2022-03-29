import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { persistStore, persistReducer } from "redux-persist"; //1
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web//2

const persistConfig = {
  //3
  key: "root",
  storage: storage,
  whitelist: ["question", "performance"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer); //4-persist the root reducer with persistconfig

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(persistedReducer, composedEnhancer); //5-use persisted reducer instead of root reducer
export let persistor = persistStore(store); //6-persist the store
