import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import contactsReducer from "./contacts/contacts-reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default store;
