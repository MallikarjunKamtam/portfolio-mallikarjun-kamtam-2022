import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = {
  isLoading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    loadingHandler: (state: { isLoading: boolean }, action) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export default globalSlice.reducer;

export const { loadingHandler } = globalSlice.actions;
