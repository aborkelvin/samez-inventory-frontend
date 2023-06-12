import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products :[
    {
      _id:1,
      productName : 'Oxygen',
      quantityAvailable : 200,
      sellingPrice: 450    
    },
    {
      _id:2,
      productName : 'Merene',
      quantityAvailable : 2200,
      sellingPrice: 4505
    },
    {
      _id:3,
      productName : 'Nunex',
      quantityAvailable : 20,
      sellingPrice: 1090    
    },
    {
      _id:4,
      productName : 'Sampdoria',
      quantityAvailable : 2002,
      sellingPrice: 230
    }
  ],
  selectedProducts:[
    {
      _id:3,
      productName : 'Nunex',
      quantityAvailable : 20,
      sellingPrice: 1090    
    },
    {
      _id:4,
      productName : 'Sampdoria',
      quantityAvailable : 2002,
      sellingPrice: 230
    }
  ]
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProducts:(state, action) =>{
        state.products.push(action.payload)
    },
    selectProducts:(state,action)=>{      
      //state.selectedProducts = state.selectedProducts.concat(action.payload)
      state.selectedProducts = action.payload
    }
  },
});

export const { setProducts,addProducts,selectProducts } = productSlice.actions;

export default productSlice.reducer;
