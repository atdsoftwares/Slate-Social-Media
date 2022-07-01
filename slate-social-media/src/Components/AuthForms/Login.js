import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginHandler } from "../../redux/reducers/authSlice";
import { useLoginSignupContext } from "../Context/LoginSignupContext";

import "./Login.css";
function Login() {
  const loginData = useSelector((state) => state.auth.loginData);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const userDetails = { username, password };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function submitLogin(e) {
    e.preventDefault();
    dispatch(loginHandler({ username, password }));
    navigate("/explore");
  }
  return (
    <div>
      <div className="Login-Form">
        <h3> Login Page</h3>
        <form onSubmit={submitLogin}>
          <label>
            <input
              class="input__field"
              type="text"
              name="username"
              placeholder="user name"
              required
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
