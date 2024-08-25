
import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
    },
    reducers: {
        ADD_CATEGORIES: (state, action) => {
            state.categories = [...action.payload]
        }
    },
});

export const {
    ADD_CATEGORIES,
} = categorySlice.actions;
export default categorySlice.reducer;
