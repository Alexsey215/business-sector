import { postsSlice } from "./PostsSlice";

export const fetchPosts = () => async (dispatch) => {
    try {
        dispatch(postsSlice.actions.postsFetching());
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json();
        dispatch(postsSlice.actions.postsFetchingSuccess(posts));
    } catch (e) {
        dispatch(postsSlice.actions.postsFetchingError(e.message))
    }
}