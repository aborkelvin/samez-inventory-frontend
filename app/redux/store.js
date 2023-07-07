import { configureStore } from "@reduxjs/toolkit";
import productForm from "./features/productformslice";
import products from "./features/productslice";
import receipts from "./features/receiptslice";
import records from "./features/recordslice";

export const store = configureStore({
  reducer: {
    productForm,
    products,
    receipts,
    records
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
