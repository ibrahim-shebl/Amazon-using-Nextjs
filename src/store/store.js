import { configureStore } from "@reduxjs/toolkit";
import nextReducer from "./nextSlice";
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

// تكوين persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// persist on Redux Reducer
const persistedReducer = persistReducer(persistConfig, nextReducer);

    
export const store = configureStore({
  reducer: { next: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//  persistor
export const persistor = persistStore(store);
