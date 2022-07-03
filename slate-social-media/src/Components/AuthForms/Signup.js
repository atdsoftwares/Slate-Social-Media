import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signUpHandler } from "../../redux/reducers/authSlice";
import { useLoginSignupContext } from "../Context/LoginSignupContext";

import "./Signup.css";
function Signup() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="Signup-Form">
        <h3> Signup Page</h3>
        <form onSubmit={signUpHandler}>
          <label>
            <input
              class="input__field"
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={(e) =>
                dispatch({ type: "NAME", payload: e.target.value })
              }
            />
          </label>

          <label>
            <input
              class="input__field"
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e) =>
                dispatch({ type: "EMAIL", payload: e.target.value })
              }
            />
          </label>

          <label>
            <input
              class="input__field"
              type="text"
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
          Already member ?<Link to="/login"> Login</Link> here
        </h4>
      </div>
    </div>
  );
}
export default Signup;
