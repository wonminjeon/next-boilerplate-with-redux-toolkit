import { RootState } from "../redux/rootReducer";
import { createSelector } from "@reduxjs/toolkit";

export const selectAsyncHello = (state: RootState) => state.asyncHello;

export const selectAsyncHelloGreeting = createSelector(
  selectAsyncHello,
  ({ entities: { greeting } }) => greeting
);

export const selectAsyncHelloLoading = createSelector(selectAsyncHello, ({ loading }) => loading);
