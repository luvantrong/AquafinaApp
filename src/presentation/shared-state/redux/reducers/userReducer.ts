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

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const snapshot = await firestore.collection("users").get();
  const users: User[] = snapshot.docs.map((doc) => {
    const data = doc.data() as User;
    const key = doc.id;
    return { ...data, key };
  });
  return users;
});

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
  reducers: {
    // signUp: {
    //   reducer: (state, action: PayloadAction<User>) => {
    //     state.users.push(action.payload);
    //   },
    //   prepare: (user: Omit<User, "key">) => {
    //     return {
    //       payload: {
    //         ...user,
    //         key: nanoid(),
    //       },
    //     };
    //   },
    // },
    signIn: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
      })
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
