import {
  createSlice,
  createAction,
  createAsyncThunk,
  createReducer,
  PayloadAction,
  nanoid,
} from "@reduxjs/toolkit";

import { Present } from "@domain";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { firestore } from "./userReducer";

export interface PresentState {
  presents: Present[];
  loading: boolean;
}

const initialState: PresentState = {
  presents: [],
  loading: false,
};

export const getAllPresent = createAsyncThunk(
  "present/getAllPresent",
  async () => {
    let presents: Present[] = [];
    try {
      const snapshot = await firestore.collection("presents").get();
      presents = snapshot.docs.map((doc) => {
        const data = doc.data() as Present;
        const key = doc.id;
        return { ...data, key };
      });
      return presents;
    } catch (error) {
      console.log("Error Get Present: ", error);
      return presents;
    }
  }
);

const presentSlice = createSlice({
  name: "present",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPresent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllPresent.fulfilled, (state, action) => {
      state.loading = false;
      state.presents = action.payload;
    });
    builder.addCase(getAllPresent.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {} = presentSlice.actions;
export const presentReducer = presentSlice.reducer;
