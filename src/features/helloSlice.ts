import { createSlice } from "@reduxjs/toolkit";

type HelloState = string;

export const initialState: HelloState = "";

const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {
    sayHello(state, action) {
      state = action.payload;
    }
  }
});

export const { sayHello } = helloSlice.actions;

export default helloSlice.reducer;
