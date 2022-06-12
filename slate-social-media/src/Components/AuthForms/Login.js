import React from "react";
import { Link } from "react-router-dom";
import { useLoginSignupContext } from "../Context/LoginSignupContext";

import "./Login.css";
function Login() {
  const { dispatch, loginHandler } = useLoginSignupContext();
  return (
    <div>
      <div className="Login-Form">
        <h3> Login Page</h3>
        <form onSubmit={loginHandler}>
          <label>
            <input
              class="input__field"
              type="text"
              name="username"
              placeholder="user name"
              required
              onChange={(e) =>
                dispatch({ type: "USER_NAME", payload: e.target.value })
              }
            />
          </label>

          <label>
            <input
              class="input__field"
              type="password"
              name="input password"
              placeholder="Password"
              required
              minlength="6"
              onChange={(e) =>
                dispatch({ type: "PASSWORD", payload: e.target.value })
              }
            />
          </label>

          <label>
            <input
              class="input__field"
              type="submit"
              name="input submit"
              required
            />
          </label>
        </form>
        <h4>
          Not a member ?<Link to="/signup"> Signup</Link> here
        </h4>
      </div>
    </div>
  );
}

export default Login;
