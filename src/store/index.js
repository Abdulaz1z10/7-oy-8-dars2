import { configureStore } from "@reduxjs/toolkit";
// import counterReducer  from "../features/counter/counterSlice";
import PostReducer from "../features/posts/PostSlice";
const store = configureStore({
    reducer:{
        // counter: counterReducer,
        posts: PostReducer
    }
})
export default store