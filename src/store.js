import rootReducer from "./redux/reducers";
import { createStore } from "redux";
import { persistReducer , persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'persist-store',
    storage
}

// const persistedReducer = persistReducer(persistConfig,rootReducer);
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export const persistedStore = persistStore(store);

export default store;