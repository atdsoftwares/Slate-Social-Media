import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const loginSignupContext = createContext();
export const useLoginSignupContext = () => useContext(loginSignupContext);

function LoginSignupContext({ children }) {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducerFn, {
    name: "",
    email: "",
    number: "",
    password: "",
    loginData: [],
  });
  function reducerFn(state, action) {
    switch (action.type) {
      case "NAME":
        return { ...state, fullName: action.payload };
      case "EMAIL":
        return { ...state, email: action.payload };
      case "USER_NAME":
        return { ...state, username: action.payload };
      case "PASSWORD":
        return { ...state, password: action.payload };
      case "LOGINDATA":
        return { ...state, loginData: action.payload };
      default:
        return state;
    }
  }

  const { fullName, email, password, username, loginData } = state;

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        username: username,
        password: password,
      });

      // saving the encodedToken in the localStorage
      dispatch({ type: "LOGINDATA", payload: response.data.foundUser });
      localStorage.setItem(`token`, response.data.encodedToken);
      //   Toast({ type: "info", message: "logged in " });
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        fullName: fullName,
        username: username,
        email: email,
        password: password,
      });

      // saving the encodedToken in the localStorage
      localStorage.setItem(`token`, response.data.encodedToken);
      //   Toast({ type: "info", message: "Signed Up " });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    // window.location.reload(false);
    // Toast({ type: "info", message: "logged out " });
    navigate("/");
  };
  return (
    <div>
      <loginSignupContext.Provider
        value={{
          state,
          dispatch,
          signUpHandler,
          loginHandler,
          logoutHandler,
          loginData,
        }}
      >
        {children}
      </loginSignupContext.Provider>
    </div>
  );
}

export default LoginSignupContext;
