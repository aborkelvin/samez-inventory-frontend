import { configureStore } from "@reduxjs/toolkit";
import productFormReducer from "./features/productformslice";
import products from "./features/productslice";

export const store = configureStore({
  reducer: {
    productForm: productFormReducer,
    products: products,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
