import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: true,
    error: ""
}

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postsFetching(state) {
            state.isLoading = true;
        },
        postsFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = "";
            state.posts = action.payload;
        },
        postsFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default postsSlice.reducer;