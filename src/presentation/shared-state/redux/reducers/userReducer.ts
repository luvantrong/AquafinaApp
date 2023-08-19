import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@domain";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { firebaseConfig } from "@core";
import { AVATAR_1 } from "@assets";

export let firestore: firebase.firestore.Firestore;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firestore = firebase.firestore();
}

export interface UserState {
  users: User[];
  loading: boolean;
  loadingRatings: boolean;
  item: User;
  index: number;
}

const initialState: UserState = {
  users: [],
  loading: false,
  loadingRatings: false,
  item: {
    key: "a",
    name: "a",
    avatar: AVATAR_1,
    point: 0,
    phone: "0912123412",
    statistical: {
      aquafina: 0,
      other: 0,
    },
  },
  index: 0,
};

export const signUp = createAsyncThunk(
  "user/signUp",
  async (user: Omit<User, "key">) => {
    const docRef = await firestore.collection("users").add(user);
    console.log(docRef);
  }
);

export const getRatings = createAsyncThunk("user/getRatings", async () => {
  let ratings: User[] = [];
  try {
    const snapshot = await firestore
      .collection("users")
      .orderBy("point", "desc")
      .get();
    ratings = snapshot.docs.map((doc) => {
      const data = doc.data() as User;
      const key = doc.id;
      return { ...data, key };
    });
    return ratings;
  } catch (error) {
    console.log("Error Get Ratings: ", error);
    return ratings;
  }
});

export const getRatingUser = createAsyncThunk(
  "user/getRatingUser",
  async (key: string) => {
    let user: User = {
      key: "a",
      name: "a",
      avatar: AVATAR_1,
      point: 0,
      phone: "0912123412",
      statistical: {
        aquafina: 0,
        other: 0,
      },
    };
    let index = 0;
    try {
      const snapshot = await firestore
        .collection("users")
        .orderBy("point", "desc")
        .get();
      const ratings = snapshot.docs.map((doc) => {
        const data = doc.data() as User;
        const key = doc.id;
        return { ...data, key };
      });

      const result = ratings.find((user) => user.key === key);
      if (result) {
        user = result;
      }
      index = ratings.findIndex((user) => user.key === key);
      return { user, index };
    } catch (error) {
      console.log("Error Get User Ratings: ", error);
      return { user, index };
    }
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
      })
      .addCase(getRatings.pending, (state) => {
        state.loadingRatings = true;
      })
      .addCase(getRatings.fulfilled, (state, action) => {
        state.loadingRatings = false;
        state.users = action.payload;
      })
      .addCase(getRatings.rejected, (state) => {
        state.loadingRatings = false;
      })
      .addCase(getRatingUser.pending, (state) => {
        state.loadingRatings = true;
      })
      .addCase(getRatingUser.fulfilled, (state, action) => {
        state.loadingRatings = false;
        state.item = action.payload.user;
        state.index = action.payload.index;
      })
      .addCase(getRatingUser.rejected, (state) => {
        state.loadingRatings = false;
      });
  },
});

export const {} = userSlice.actions;
export const userReducer = userSlice.reducer;
