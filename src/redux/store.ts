import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import userReducer from "./Slice/UserSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: userReducer,
  },
});

// Inferred types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
