import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: true,
    error: "",
    idChangeChecker: false,
    titleChangeChecker: false,
    bodyChangeChecker: false
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
        },

        postsSortById(state) {
            state.idChangeChecker = !state.idChangeChecker;
            if (state.idChangeChecker) {
                state.posts.sort((a, b) => a.id < b.id ? 1 : -1);
            } else {
                state.posts.sort((a, b) => a.id > b.id ? 1 : -1);
            }
        },
        postsSortTitle(state) {
            state.posts.sort((a, b) => a.title > b.title ? 1 : -1);
        },
        postsSortBody(state) {
            state.posts.sort((a, b) => a.body > b.body ? 1 : -1);
        }
    }
})

export default postsSlice.reducer;