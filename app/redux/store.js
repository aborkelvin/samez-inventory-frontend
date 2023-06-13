import { configureStore } from "@reduxjs/toolkit";
import productForm from "./features/productformslice";
import products from "./features/productslice";
import receipts from "./features/receiptslice";

export const store = configureStore({
  reducer: {
    productForm,
    products,
    receipts,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
