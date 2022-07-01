import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  number: "",
  password: "",
  loginData: [],
};

export const loginHandler = createAsyncThunk(
  "auth/login",
  async (userDetails) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        username: userDetails.username,
        password: userDetails.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      return response.data.foundUser;
      // console.log(response.data.foundUser);
    } catch (error) {
      console.log(error);
    }
  }
);

export const signUpHandler = createAsyncThunk(
  "auth/signup",
  async (userDetails) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        fullName: userDetails.fullName,
        username: userDetails.username,
        email: userDetails.email,
        password: userDetails.password,
      });
      localStorage.setItem(`token`, response.data.encodedToken);
      //   Toast({ type: "info", message: "Signed Up " });
    } catch (error) {
      console.log(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutHandler: () => localStorage.clear(),
  },
  extraReducers: {
    [loginHandler.pending]: (state, action) => {
      state.loginData = [];
    },
    [loginHandler.fulfilled]: (state, action) => {
      state.loginData = action.payload;
      // localStorage.setItem(`token`, action.payload.encodedToken);
    },
    [loginHandler.rejected]: (state, action) => {
      state.loginData = [];
    },
    [signUpHandler.pending]: (state, action) => {
      state.loginData = [];
    },
    [signUpHandler.fulfilled]: (state, action) => {
      state.loginData = action.payload;
      localStorage.setItem(`token`, action.payload.encodedToken);
    },
    [signUpHandler.rejected]: (state, action) => {
      state.loginData = [];
    },
  },
});

export const { logoutHandler } = authSlice.actions;
export default authSlice.reducer;
