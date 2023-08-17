import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userReducer, bannerReducer, presentReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    user: userReducer,
    banner: bannerReducer,
    present: presentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
