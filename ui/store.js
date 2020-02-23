import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers, { initialState } from "./src/reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  // storage: storage.default
};

const store = (state = initialState) => {
  return createStore(
    // persistReducer({}, reducers)
    reducers,
    state,
    compose(applyMiddleware(thunk))
  );
};
// store.persistor = persistStore(store);
export default store;
