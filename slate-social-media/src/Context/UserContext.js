import React, { createContext, useContext, useReducer } from "react";

const userContext = createContext();
export const useUserContext = () => useContext(userContext);

function UserContext({ children }) {
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIwMDg0MGJkYi00Y2MwLTQxNmMtOGU1MS1jMDEwZGUyNzI1YzgiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.37KBJpUBDyyqib8n1aD8MAhV4IqbRK7aH9epQtI958g";
  // localStorage.setItem("token", token);

  function userReducer(state, action) {
    switch (action.type) {
      case "GET_USERS":
        return {
          ...state,
          getUsers: action.payload,
        };
      case "GET_USERS_BY_ID":
        return {
          ...state,
          getUsersbyId: action.payload,
        };

      case "GET_USER_DETAILS":
        return {
          ...state,
          getUserDetails: action.payload,
        };
      default:
        return state;
    }
  }

  const [state, userDispatch] = useReducer(userReducer, {
    getUsers: [],
    getUsersbyId: [],
    getUserDetails: [],
  });

  const { getUserDetails, getUsers, getUsersbyId } = state;

  return (
    <div>
      <userContext.Provider
        value={{ state, userDispatch, getUserDetails, getUsers, getUsersbyId }}
      >
        {children}
      </userContext.Provider>
    </div>
  );
}

export default UserContext;
