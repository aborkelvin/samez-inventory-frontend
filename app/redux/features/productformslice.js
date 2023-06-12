import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFormOpen: false,
};

export const productFormSlice = createSlice({
  name: "productForm",
  initialState,
  reducers: {
    openForm: (state) => {
      state.isFormOpen = true;
    },
    closeForm: (state) => {
      state.isFormOpen = false;
    },
    toggleForm: (state) => {
      state.isFormOpen = !state.isFormOpen;
    },
  },
});

export const { openForm, closeForm, toggleForm } = productFormSlice.actions;

export default productFormSlice.reducer;
