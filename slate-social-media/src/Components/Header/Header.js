import { useDispatch, useSelector, Link } from "../../Utils/SystemUtils";
import { logoutHandler } from "../../redux/reducers/authSlice";

function Header() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.auth.loginData);

  return (
    <div>
      <nav class="fixed top-0 w-full flex flex-wrap items-center justify-between py-3 bg-gray-600 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
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
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
