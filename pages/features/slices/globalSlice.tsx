import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postUserData } from "../APIs/postuserData.api";
import { CONSTANTS } from "../../utils";
import { stat } from "fs";

const { fulfilled, idle, loading, pending } = CONSTANTS;

interface initialStateProps {
  isLoading: boolean;
}

const initialState: initialStateProps = {
  isLoading: false,
};

export const postUserDataAsync = createAsyncThunk(
  "/post-user-data",
  async (paylod: any) => {
    const res = await postUserData(paylod);
    return res;
  }
);

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    loadingHandler: (state: { isLoading: boolean }, action) => {
      state.isLoading = !state.isLoading;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postUserDataAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(postUserDataAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default globalSlice.reducer;

export const { loadingHandler } = globalSlice.actions;
