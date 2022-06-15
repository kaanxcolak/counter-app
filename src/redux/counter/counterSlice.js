import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {    ///Veriyi manipüle edeceğimiz şeyleri yazarız yani actions
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementbyAmount: (state,action) => {
            state.value += Number(action.payload);
        
        },
    },
});

export const { increment } = counterSlice.actions;
export const { incrementbyAmount } = counterSlice.actions;
export const { decrement } = counterSlice.actions;
export default counterSlice.reducer;
