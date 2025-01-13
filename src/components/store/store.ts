import { configureStore } from "@reduxjs/toolkit";
import autReducer from "./reducers/authSlice";
import mainReducer from "./reducers/mainSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "auth-persist",
  storage,
};

const persistedReducer = persistReducer(persistConfig, autReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    main: mainReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
