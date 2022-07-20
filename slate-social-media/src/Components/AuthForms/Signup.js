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
      {/* <div className="Signup-Form">
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
      </div> */}
      <h3 className="login-page-title"> Signup Page</h3>
      <div className="Signup-Form">
        <div class="form-control">
          <img
            src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_secure_login_pdn4.svg"
            alt="user"
            className="user-icon"
          />
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
                type="tel"
                name="telnumber"
                inputmode="numeric"
                pattern="[0-9]*"
                placeholder="Phone Number"
                required
                onChange={(e) =>
                  dispatch({ type: "NUMBER", payload: e.target.value })
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
          <h4 className="login-instruction">
            Already member ?<Link to="/Login"> Login</Link> here
          </h4>
        </div>
      </div>
    </div>
  );
}
export default Signup;
