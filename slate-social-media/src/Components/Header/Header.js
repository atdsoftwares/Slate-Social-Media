import { useDispatch, useSelector, Link } from "../../Utils/SystemUtils";
import { logoutHandler } from "../../redux/reducers/authSlice";

import "./Header.css";
function Header() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.auth.loginData);
  return (
    <div>
      <nav class="navigation-menu">
        <div class="navigation__left">
          <Link to="/">
            <div class="navigation__logo">Slate Social</div>
          </Link>
        </div>

        <div class="navigation__right">
          <div>
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
            )}{" "}
          </div>
          <div className="user-avatar">
            {token ? (
              <img src={loginData.avatar} alt="user avatar" />
            ) : (
              <span class="material-icons">account_circle</span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
