import { useEffect } from "react";
import { logoutHandler } from "../../redux/reducers/authSlice";
import { getUserDetailsFn } from "../../redux/reducers/usersSlice";
import {
  React,
  Link,
  useSelector,
  useDispatch,
  useNavigate,
} from "../../Utils/SystemUtils";

function Sidebar() {
  const loginData = useSelector((state) => state.auth.loginData);
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const _id = loginData._id;
  const navigate = useNavigate();
  const redirectHome = () => navigate("/home");
  useEffect(() => {
    getUserDetailsFn(_id);
  }, [_id]);

  const { avatar, username, fullName } = getUserDetails;
  const dispatch = useDispatch();
  return (
    <div>
      <div class="flex fixed left-0">
        <div class="w-full flex">
          <div class="py-3 w-1/4 px-16 h-screen ">
            <div class="side-menu my-8">
              <ol class="text-gray-700">
                <li class="text-xl my-5 flex">
                  <Link to="/home">
                    <span className="material-icons" title="Home">
                      home
                    </span>
                  </Link>
                  Home
                </li>
                <li class="text-xl my-5 flex">
                  <Link to="/explore">
                    <span className="material-icons" title="Home">
                      explore
                    </span>
                  </Link>
                  Explore
                </li>
                <li class="text-xl my-5 flex">
                  <Link to="/bookmark ">
                    <span className="material-icons" title="Home">
                      bookmarks
                    </span>
                  </Link>
                  Bookmark
                </li>
                <li class="text-xl my-5 flex">
                  <Link to="/profile">
                    <span className="material-icons" title="Home">
                      account_circle
                    </span>
                  </Link>
                  Profile
                </li>
              </ol>
            </div>
            <span
              onClick={redirectHome}
              class="btn cursor-pointer bg-blue-600 mt-8 text-white rounded-full px-16 py-3"
            >
              Tweak
            </span>

            <div class="flex flex-col justify-center items-center w-24 mt-4 ml-8">
              <p class="text-sm w-24">{fullName && fullName}</p>
              <span class="text-sm">@{username && username}</span>
              <span
                onClick={() => dispatch(logoutHandler())}
                class="text-xs inline-block py-1 px-2.5
                  cursor-pointer
                  leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full"
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
