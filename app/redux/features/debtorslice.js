import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        _id:1,        
        finalprice:44000,
        customername:'Marcus Obiocha',
        amountpaid: 34000,
        amountowed: 10000,        
        paymentmode:'cash',
        date:'Jun 28, 14:21',
        receiptid:1
    },
    {
        _id:2,        
        finalprice:440000,
        customername:'Ichie Hazard',
        amountpaid: 340220,
        amountowed: 100000,        
        paymentmode:'cash',
        date:'Jun 27, 14:21',
        receiptid:2
    }
]

const debtorSlice = createSlice ({
    name: "debtorSlice",
    initialState,
    reducers :{
        setDebtors : (state,action) => {
            state = action.payload
        },
        addDebtor : (state, action) => {
            state.push(action.payload)
        },
        removeDebtor : (state, action) => {
            
        },
        updateDebtor: (state, action) => {

        }
    }
})

export const { setDebtors, addDebtor ,removeDebtor , updateDebtor }  = debtorSlice.actions;

export default debtorSlice.reducer;