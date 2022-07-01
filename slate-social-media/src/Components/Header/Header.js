import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutHandler } from "../../redux/reducers/authSlice";
// import { useLoginSignupContext } from "../Context/LoginSignupContext";

import "./Header.css";
function Header() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  // const { logoutHandler } = useLoginSignupContext();
  return (
    <div>
      <nav class="navigation-menu">
        <div class="navigation__left">
          <Link to="/">
            <div class="navigation__logo">Slate Social</div>
          </Link>
        </div>
        <input
          type="search"
          class="navigation__input"
          placeholder="search item"
        />
        <div class="navigation__right">
          {!token ? (
            <Link to="/login">
              <button className="btn btn-danger">Login</button>
            </Link>
          ) : (
            <Link to="/login">
              <button
                className="btn btn-danger"
                onClick={() => dispatch(logoutHandler())}
              >
                Logout
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
