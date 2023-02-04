import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    g: { name: "Gryffindor", score: 0 },
    r: { name: "Ravenclaw", score: 0 },
    h: { name: "Hufflepuff", score: 0 },
    s: { name: "Slytherin", score: 0 }
};

export const housesSlice = createSlice({
    name: "houses",
    initialState,
    reducers: {
        pointsForHouse: (state, action) => {
            const house: string = action.payload.house;
            const score: number = action.payload.score;

            state[house] = { ...state[house], score: state[house].score + score };
        }
    }
});

export const {
    pointsForHouse
} = housesSlice.actions;

export default housesSlice.reducer;
