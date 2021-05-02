import { combineReducers } from "redux";
import farmReducer from "./farmReducer";
import myPageReducer from "./myPageReducer";
import authReducer from "./authReducer";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage: storageSession,
  // whitelist: ["authReducer"],
};

const rootReducer = combineReducers({
  farmReducer,
  myPageReducer,
  authReducer,
});

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);
