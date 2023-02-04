import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        nextQuestion: (state) => {
            state.count++;
        }
    }
});

export const {
    nextQuestion
} = counterSlice.actions;

export default counterSlice.reducer;
