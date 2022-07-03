import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/authSlice";
import usersReducer from "./reducers/usersSlice";
import postsReducer from "./reducers/postsSlice";
import commentsReducer from "./reducers/commentsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
});
export default store;
