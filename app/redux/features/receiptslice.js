const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    receiptInfo : {
        totalprice:44320,
        discount:"true",
        discountamount:320,
        finalprice:44000,
        customername:'Marcus Obiocha Bellingham',
        amountpaid: 34000,
        paymenttype:"partpayment",
        paymentmode:'cash',
        productdescription:[
            {
               _id:3,
                productName : 'Nunex',
                quantityAvailable : 20,
                sellingPrice: 1090,
                buyquantity:12,
                subtotal: 10900
              },
              {
                _id:4,
                productName : 'Sampdoria',
                quantityAvailable : 2002,
                sellingPrice: 230,
                buyquantity:120,
                subtotal: 27690    
              }
        ]

    }
}

const receiptSlice = createSlice({
    name:"receipt",
    initialState,
    reducers:{
        setReceiptInfo(state,action){
            state.receiptInfo = action.payload;
        },
    }
})


export const {setReceiptInfo} = receiptSlice.actions;

export default receiptSlice.reducer
