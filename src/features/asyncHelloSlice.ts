import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchHello } from "../services/apis";
import { AsyncHello, LoadingStatus } from "../services/types";

export interface AsyncHelloState {
  entities: AsyncHello;
  loading: LoadingStatus;
}

const initialState: AsyncHelloState = {
  entities: { greeting: "" },
  loading: "idle",
};

export const fetchHelloThunk = createAsyncThunk("asyncHello/fetchHelloThunk", async () => {
  const response = await fetchHello();
  return response.data as AsyncHello;
});

const helloSlice = createSlice({
  name: "asyncHello",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHelloThunk.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchHelloThunk.fulfilled, (state, { payload }) => {
      state.entities = payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchHelloThunk.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default helloSlice.reducer;
