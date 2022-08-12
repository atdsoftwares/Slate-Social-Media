import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axios, toast } from "../../Utils/SystemUtils";

const initialState = {
  fullName: "",
  email: "",
  username: "",
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
      toast.success("Login Successful");
      return response.data.foundUser;
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
        avatar: userDetails.avatar,
        fullName: userDetails.fullName,
        username: userDetails.username,
        email: userDetails.email,
        password: userDetails.password,
      });
      localStorage.setItem(`token`, response.data.encodedToken);
      toast.success("Signup Successful");
    } catch (error) {
      console.log(error);
    }
  }
);

export function logoutHandler() {
  localStorage.clear();
  toast.success("Logout Successfully");
  window.location.reload();
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [loginHandler.fulfilled]: (state, action) => {
      state.loginData = action.payload;
    },

    [signUpHandler.fulfilled]: (state, action) => {
      state.loginData = action.payload;
      localStorage.setItem(`token`, action.payload.encodedToken);
    },
  },
});

export default authSlice.reducer;
