import { createSlice } from "@reduxjs/toolkit";
import { IntUser } from "../Interfaces/User";

const initialState = {
    user: {
        name: "",
        blood: "",
        race: ""
    }
};

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user: IntUser = action.payload;
            state.user = user;
        }
    }
});

export const {
    addUser
} = UserSlice.actions;

export default UserSlice.reducer;
