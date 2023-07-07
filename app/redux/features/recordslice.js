import { createSlice } from "@reduxjs/toolkit";

//Note other descriptions for records will include sales, stock refill, payment completion e.t.c
/* I will also add a page and button for adding stock refill to records and for collecting and generating receipt for 
payment completion */

const initialState = {
    records:[
        {
            totalprice:44320,        
            discountamount:320,
            finalprice:44000,
            customername:'Marcus Obiocha ',
            amountpaid: 34000,
            paymenttype:"partpayment",
            paymentmode:'cash',
            date:'Jun 28th 14:21',
            recordtype:"Sales",
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
        },
        {
            totalprice:44320,        
            discountamount:320,
            finalprice:44000,
            customername:'Ok Bellingham',
            amountpaid: 34000,
            paymenttype:"partpayment",
            paymentmode:'cash',
            date:'Jun 28th 14:21',
            recordtype:"Sales",
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
        },
        
    ]
}

const recordSlice = createSlice({
    name: "recordSlice",
    initialState,
    reducers:{
        setRecord:(state, action) =>{
            state.records = action.payload;
        },
        updateRecord:(state,action) => {
            state.records.push(action.payload)
        }
    }
})

export const {setRecord , updateRecord} = recordSlice.actions;

export default recordSlice.reducer;