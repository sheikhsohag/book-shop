import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Inferred types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
