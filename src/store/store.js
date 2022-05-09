import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/PostsSlice";
const rootReducer = combineReducers({
    postsReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
}