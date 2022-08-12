import { axios, toast } from "../../Utils/SystemUtils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  composePost: [],
  getComposePost: [],
  image: "",
  video: "",
  editorText: "",
  username: "",
  addToBookmarks: [],
  likespost: [],
  getPostsbyIdFn: [],
  getPostsByUserName: [],
};

export const composeNewPostFn = createAsyncThunk(
  "posts/composeNewPost",
  async (post) => {
    try {
      const response = await axios({
        method: "post",
        url: "/api/posts",
        headers: { authorization: localStorage.getItem("token") },
        data: { postData: { ...post } },
      });
      toast.success("Post Successfully created");
      return response.data.posts;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getComposedPostFn = createAsyncThunk(
  "posts/getComposedPost",
  async () => {
    try {
      const response = await axios.get(`/api/posts`);
      return response.data.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePostFn = createAsyncThunk(
  "posts/deletePost",
  async (_id) => {
    try {
      const response = await axios({
        method: "delete",
        url: `/api/posts/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      toast.success("Post Successfully deleted");
      return response.data.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export function editPostFn(_id, image, video, content, pdf) {
  localStorage.setItem("id", _id);
  localStorage.setItem("image", image);
  localStorage.setItem("video", video);
  localStorage.setItem("content", content);
  localStorage.setItem("pdf", pdf);
  toast.success("Post can be  edited");
}

export const addPostToBookmarkFn = createAsyncThunk(
  "posts/addToBookmarks",
  async (_id) => {
    try {
      const response = await axios({
        method: "post",
        url: `/api/users/bookmark/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
        data: {},
      });
      toast.success("Post Successfully added to bookmarks");
      return response.data.bookmarks;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getBookmarkedPostsFn = createAsyncThunk(
  "posts/getBookmarkedPosts",
  async () => {
    try {
      const response = await axios({
        method: "get",
        url: `/api/users/bookmark`,
        headers: { authorization: localStorage.getItem("token") },
      });
      toast.success("Bookmarked Posts fetched");
      return response.data.bookmarks;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeBookmarkedPostsFn = createAsyncThunk(
  "posts/removeBookmarkedPosts",
  async (_id) => {
    try {
      const response = await axios({
        method: "post",
        url: `/api/users/remove-bookmark/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
        data: {},
      });
      toast.success("Post Successfully removed from bookmarks");
      return response.data.bookmarks;
    } catch (error) {
      console.log(error);
    }
  }
);

export const likesPostFn = createAsyncThunk("posts/likesPost", async (_id) => {
  try {
    const response = await axios({
      method: "post",
      url: `/api/posts/like/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {},
    });
    toast.success("Post Successfully liked");
    return response.data.posts;
  } catch (error) {
    console.log(error);
  }
});

export const dislikesPostFn = createAsyncThunk(
  "posts/dislikesPost",
  async (_id) => {
    try {
      const response = await axios({
        method: "post",
        url: `/api/posts/dislike/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
        data: {},
      });
      toast.success("Post Successfully disliked");
      return response.data.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPostsbyIdFn = createAsyncThunk(
  "posts/getPostsbyId",
  async (_id) => {
    try {
      const response = await axios.get(`/api/posts/${_id}`);

      return response.data.post;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPostByUserNameFn = createAsyncThunk(
  "posts/getPostByUserName",
  async (username) => {
    try {
      const response = await axios.get(`/api/posts/user/${username}`);

      return response.data.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updatePostFn = createAsyncThunk(
  "posts/updatePost",
  async (data) => {
    try {
      const response = await axios({
        method: "post",
        url: `/api/posts/edit/${data._id}`,
        headers: { authorization: localStorage.getItem("token") },
        // data: { postData: { ...data.post } },
        data: { postData: { ...data } },
      });
      toast.success("Post Successfully updated");
      return response.data.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [composeNewPostFn.fulfilled]: (state, action) => {
      state.composePost = action.payload;
    },
    [getComposedPostFn.fulfilled]: (state, action) => {
      state.getComposePost = action.payload;
    },
    [deletePostFn.fulfilled]: (state, action) => {
      state.getComposePost = action.payload;
    },
    [addPostToBookmarkFn.fulfilled]: (state, action) => {
      state.addToBookmarks = action.payload;
    },
    [getBookmarkedPostsFn.fulfilled]: (state, action) => {
      state.getPostsByUserName = action.payload;
    },
    [removeBookmarkedPostsFn.fulfilled]: (state, action) => {
      state.addToBookmarks = action.payload;
    },
    [likesPostFn.fulfilled]: (state, action) => {
      state.likespost = action.payload;
    },
    [dislikesPostFn.fulfilled]: (state, action) => {
      state.likespost = action.payload;
    },
    [getPostsbyIdFn.fulfilled]: (state, action) => {
      state.getPostsbyId = action.payload;
    },
    [getPostByUserNameFn.fulfilled]: (state, action) => {
      state.getPostsByUserName = action.payload;
    },
    [updatePostFn.fulfilled]: (state, action) => {
      state.getPostsbyId = action.payload;
    },
  },
});

export default postSlice.reducer;
