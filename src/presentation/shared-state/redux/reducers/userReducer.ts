import {
  createSlice,
  createAction,
  createAsyncThunk,
  createReducer,
  PayloadAction,
  nanoid,
} from "@reduxjs/toolkit";

import { User } from "@domain";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { firebaseConfig } from "@core";

export let firestore: firebase.firestore.Firestore;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firestore = firebase.firestore();
}

export interface UserState {
  users: User[];
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  loading: false,
};

export const signUp = createAsyncThunk(
  "user/signUp",
  async (user: Omit<User, "key">) => {
    const docRef = await firestore.collection("users").add(user);
    console.log(docRef);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const {} = userSlice.actions;
export const userReducer = userSlice.reducer;
