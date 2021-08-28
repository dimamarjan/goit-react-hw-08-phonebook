import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { todosReducer } from './todos';
import authReducer from "redux/slices/auth/auth-slice";

// import contacts from 'redux/slices/contacts'
// import filter from 'redux/slices/filter'

// const rootReducer = {
//     contacts,
//     filter
// }

// const store = configureStore({
//     reducer: rootReducer,
//     devTools: process.env.NODE_ENV !== "production",
// })

// export default store;

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // todos: todosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
