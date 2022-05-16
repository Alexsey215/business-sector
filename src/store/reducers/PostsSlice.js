import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    fetchedPosts: [],
    searchedPosts: [],
    isLoading: false,
    error: "",
    idChangeChecker: false
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
            state.fetchedPosts = action.payload;
        },
        postsFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        postsSortById(state) {
            state.idChangeChecker = !state.idChangeChecker;

            state.searchedPosts.length > 0 ? state.posts = state.searchedPosts : state.posts = state.fetchedPosts;

            if (state.idChangeChecker) {
                state.posts.sort((a, b) => a.id < b.id ? 1 : -1);
            } else {
                state.posts.sort((a, b) => a.id > b.id ? 1 : -1);
            }
        },
        postsSortTitle(state) {
            state.searchedPosts.length > 0 ? state.posts = state.searchedPosts : state.posts = state.fetchedPosts;

            state.posts.sort((a, b) => a.title > b.title ? 1 : -1);
        },
        postsSortBody(state) {
            state.searchedPosts.length > 0 ? state.posts = state.searchedPosts : state.posts = state.fetchedPosts;

            state.posts.sort((a, b) => a.body > b.body ? 1 : -1);
        },
        postsSearched(state, action) {
            state.isLoading = false;
            state.error = "";
            state.searchedPosts = action.payload;
        }
    }
})

export default postsSlice.reducer;