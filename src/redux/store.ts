import { configureStore, ThunkAction, Action, Store } from "@reduxjs/toolkit";
import { MakeStore } from "next-redux-wrapper";

import rootReducer, { RootState } from "./rootReducer";

let store: Store;

const makeStore: MakeStore = (initialState: RootState) => {
  store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: initialState
  });

  return store;
};

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default makeStore;
