"use client";

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productCheckout";
import cart from "./cart";

const store = configureStore({
  reducer: {
    productCheckout: productSlice.reducer,
    cart: cart.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
