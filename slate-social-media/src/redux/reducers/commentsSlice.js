import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axios, toast } from "../../Utils/SystemUtils";

const initialState = {
  composeComment: [],
  commentsdata: [],
  commentBoxInput: "",
};

export const postCommentFn = createAsyncThunk(
  "comments/composeComment",
  async (data) => {
    try {
      const response = await axios({
        method: "post",
        url: `/api/comments/add/${data._id}`,
        headers: { authorization: localStorage.getItem("token") },
        data: { commentData: data.comment },
      });
      toast.success("Commented Successfully!");
      return response.data.comments;
    } catch (error) {
      console.log(error);
    }
  }
);

export const upvoteCommentFn = createAsyncThunk(
  "comments/upvoteComment",
  async (data) => {
    try {
      const response = await axios({
        method: "post",
        url: `/api/comments/upvote/${data.postId}/${data.commentId}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      toast.success("Comment Successfully upvoted");
      return response.data.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const downvoteCommentFn = createAsyncThunk(
  "comments/downvoteComment",
  async (data) => {
    try {
      const response = await axios({
        method: "post",
        url: `/api/comments/downvote/${data.postId}/${data.commentId}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      toast.success("Comment Successfully downvoted");
      return response.data.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCommentsbyPostIdFn = createAsyncThunk(
  "comments/getCommentsbyPostId",
  async (_id) => {
    try {
      const response = await axios({
        method: "get",
        url: `/api/comments/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
      });

      return response.data.comments;
    } catch (error) {
      console.log(error);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [postCommentFn.fulfilled]: (state, action) => {
      state.composeComment = action.payload;
    },
    [getCommentsbyPostIdFn.fulfilled]: (state, action) => {
      state.commentsdata = action.payload;
    },
    [downvoteCommentFn.fulfilled]: (state, action) => {
      state.composeComment = action.payload;
    },
    [upvoteCommentFn.fulfilled]: (state, action) => {
      state.composeComment = action.payload;
    },
  },
});
export default commentsSlice.reducer;
