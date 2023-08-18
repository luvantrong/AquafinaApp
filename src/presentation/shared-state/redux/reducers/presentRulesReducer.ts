import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PresentRules } from "@domain";
import { firestore } from "./userReducer";

export interface PresentRulesState {
  presentRules: PresentRules[];
  loading: boolean;
}

const initialState: PresentRulesState = {
  presentRules: [],
  loading: false,
};

export const getAllPresentRules = createAsyncThunk(
  "presentRules/getAllPresentRules",
  async () => {
    let presentRules: PresentRules[] = [];
    try {
      const snapshot = await firestore.collection("rules").get();
      presentRules = snapshot.docs.map((doc) => {
        const data = doc.data() as PresentRules;
        const key = doc.id;
        return { ...data, key };
      });
      return presentRules;
    } catch (error) {
      console.log("Error Get PresentRules: ", error);
      return presentRules;
    }
  }
);

const presentRulesSlice = createSlice({
  name: "presentRules",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPresentRules.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllPresentRules.fulfilled, (state, action) => {
      state.loading = false;
      state.presentRules = action.payload;
    });
    builder.addCase(getAllPresentRules.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {} = presentRulesSlice.actions;
export const presentRulesReducer = presentRulesSlice.reducer;
