import { useDispatch, useSelector, Link } from "../../Utils/SystemUtils";
import { logoutHandler } from "../../redux/reducers/authSlice";

// import "./Header.css";
function Header() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.auth.loginData);
  console.log("🚀 ~ file: Header.js ~ line 9 ~ Header ~ loginData", loginData);
  return (
    <div>
      {/* <nav class="navigation-menu">
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
              <img
                src={loginData.avatar && loginData.avatar}
                alt="user avatar"
              />
            ) : (
              <span class="material-icons">account_circle</span>
            )}
          </div>
        </div>
      </nav> */}
      <nav class="fixed top-0 w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div class="container-fluid flex justify-between w-full items-center">
            <div class="text-xl text-blue-600 font-bold" href="#">
              SlateSocial
            </div>

            <div class="flex items-center">
              {!token ? (
                <Link to="/login">
                  <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    Login
                  </span>
                </Link>
              ) : (
                <Link to="/login">
                  <span
                    onClick={() => dispatch(logoutHandler())}
                    class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded"
                  >
                    Logout
                  </span>
                </Link>
              )}

              {token ? (
                <img
                  src={loginData.avatar && loginData.avatar}
                  class="rounded-full w-8 h-8 ml-2"
                  alt="Avatar"
                />
              ) : (
                <span class="material-icons">account_circle</span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
