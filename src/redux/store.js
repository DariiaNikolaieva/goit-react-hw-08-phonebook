import { configureStore } from "@reduxjs/toolkit";
import { middleware } from "./middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contacts-reducer";
import authReducer from "./auth/auth-reducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
// export default { persistor, store };
