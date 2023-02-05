import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    answers: []
};

export const answersSlice = createSlice({
    name: "answers",
    initialState,
    reducers: {
        addAnswer: (state, action) => {
            state.answers.push(action.payload);
        }
    }
});

export const {
    addAnswer
} = answersSlice.actions;

export default answersSlice.reducer;
