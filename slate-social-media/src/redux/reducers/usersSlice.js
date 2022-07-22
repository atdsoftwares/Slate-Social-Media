import { axios, toast } from "../../Utils/SystemUtils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  getUsers: [],
  getUsersbyId: [],
  getUserDetails: [],
};

export const getUsersFn = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios({
      method: "get",
      url: "/api/users/",
    });
    return response.data.users;
  } catch (error) {
    console.log(error);
  }
});

export const getUserDetailsFn = createAsyncThunk(
  "users/getUserDetails",
  async (_id) => {
    try {
      const response = await axios({
        method: "get",
        url: `/api/users/${_id}`,
      });
      toast.success("User details fetched");
      return response.data.user;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getUserDetailsByIdFn = createAsyncThunk(
  "users/getUserDetailsById",
  async (paramsId) => {
    try {
      const response = await axios({
        method: "get",
        url: `/api/users/${paramsId.id}`,
      });
      return response.data.user;
    } catch (error) {
      console.log(error);
    }
  }
);

export const followUserFn = createAsyncThunk(
  "users/followUser",
  async (userId) => {
    try {
      const response = await axios({
        method: "post",
        url: `/api/users/follow/${userId}`,
        headers: { authorization: localStorage.getItem("token") },
        data: {},
      });
      toast.success("User Successfully followed");
      return response.data.user;
    } catch (error) {
      console.log(error);
    }
  }
);

export const unFollowUserFn = createAsyncThunk(
  "users/unFollowUser",
  async (userId) => {
    try {
      const response = await axios({
        method: "post",
        url: `/api/users/unfollow/${userId}`,
        headers: { authorization: localStorage.getItem("token") },
        data: {},
      });
      toast.success("User Successfully unfollowed");
      return response.data.user;
    } catch (error) {
      console.log(error);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsersFn.fulfilled]: (state, action) => {
      state.getUsers = action.payload;
    },
    [getUserDetailsFn.fulfilled]: (state, action) => {
      state.getUserDetails = action.payload;
    },
    [getUserDetailsByIdFn.fulfilled]: (state, action) => {
      state.getUsersbyId = action.payload;
    },

    [followUserFn.fulfilled]: (state, action) => {
      state.getUserDetails = action.payload;
    },
    [unFollowUserFn.fulfilled]: (state, action) => {
      state.getUserDetails = action.payload;
    },
  },
});

export default userSlice.reducer;
