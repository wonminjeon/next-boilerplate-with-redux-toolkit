import { combineReducers } from "@reduxjs/toolkit";

import hello from "../features/helloSlice";

const rootReducer = combineReducers({
  hello
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
