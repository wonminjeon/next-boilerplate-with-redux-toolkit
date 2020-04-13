import { combineReducers } from "@reduxjs/toolkit";

import hello from "../features/helloSlice";
import asyncHello from "../features/asyncHelloSlice";

const rootReducer = combineReducers({
  hello,
  asyncHello,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
