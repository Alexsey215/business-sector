import { postsSlice } from "./PostsSlice";

export const fetchPosts = (payload) => async (dispatch) => {
    try {
        dispatch(postsSlice.actions.postsFetching());

        if (payload) {
            dispatch(postsSlice.actions.postsSearched(payload));
        } else {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const posts = await response.json();
            dispatch(postsSlice.actions.postsFetchingSuccess(posts));
        }
    } catch (e) {
        dispatch(postsSlice.actions.postsFetchingError(e.message))
    }
}