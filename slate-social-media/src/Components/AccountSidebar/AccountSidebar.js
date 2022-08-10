import {
  useDispatch,
  useSelector,
  Link,
  useEffect,
} from "../../Utils/SystemUtils";
import {
  followUserFn,
  getUsersFn,
  unFollowUserFn,
} from "../../redux/reducers/usersSlice";

// import "./AccountSidebar.css";
function AccountSidebar() {
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const getUsers = useSelector((state) => state.users.getUsers);

  const dispatch = useDispatch();
  const { following } = getUserDetails;

  // getuserdetail from usercontext id , send the saeme id
  useEffect(() => {
    dispatch(getUsersFn());
  }, []);

  return (
    <div>
      <div class="py-3 px-6  fixed right-0">
        <div class="search-bar items-center  flex text-center rounded-full bg-gray-600">
          <input
            type="text"
            placeholder="Search tweaks"
            class="px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:border-gray-300"
          />
        </div>
        <div class="trending bg-gray-200 rounded-2xl my-4 py-2">
          <div class="trend-title flex justify-between px-4 py-2">
            <h2 class="font-bold text-lg">Trends For You</h2>
            <span>
              <span class="material-icons">trending_up</span>
            </span>
          </div>
          <div class="trending-list border-t-2 border-gray-300 py-2">
            <div class="trending-topic px-5 items-center text-sm font-thin flex justify-between">
              <p class="text-black">Trending in India</p>
              <span class="material-icons">trending_up</span>
            </div>
            <h3 class="font-bold text-md px-5">#RiseRoarRevolt</h3>
            <span class="text-black text-sm font-thin px-5">111K Tweets</span>
          </div>
          <div class="trending-list border-t-2 border-gray-300 py-2">
            <div class="trending-topic px-5 items-center text-sm font-thin flex justify-between">
              <p class="text-black">Trending in Technology</p>
              <span class="material-icons">trending_up</span>
            </div>
            <h3 class="font-bold text-md px-5">#MyDukaan</h3>
            <span class="text-black text-sm font-thin px-5">24K Tweets</span>
          </div>
          <div class="trending-list border-t-2 border-gray-300 py-2">
            <div class="trending-topic px-5 items-center text-sm font-thin flex justify-between">
              <p class="text-black">Trending in Technology</p>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <h3 class="font-bold text-md px-5">#IndianStartups</h3>
            <span class="text-black text-sm font-thin px-5">12.4K Tweets</span>
          </div>

          <div class="flex justify-end flex-col  ">
            <h1 class="bg-white p-2 font-bold rounded-lg border border-gray-200 w-auto text-gray-900">
              {" "}
              People you dont't know
            </h1>
            {getUsers.map((user) => (
              <ul class="bg-white rounded-lg border border-gray-200 w-auto text-gray-900 ">
                <li class="px-6 py-2 border-b border-gray-200 rounded-t-lg flex justify-around  items-center">
                  <Link to={`/ViewProfile/${user._id}`}>
                    <div class="flex justify-center items-center">
                      <img
                        src={user.avatar}
                        class="rounded-full w-10 shadow-lg"
                        alt="Avatar"
                      />
                      <p className="m-2">{user.fullName}</p>
                    </div>
                  </Link>
                  {following && following?.some((u) => u._id === user._id) ? (
                    <span
                      class="material-icons cursor-pointer text-red-500"
                      onClick={() => dispatch(unFollowUserFn(user._id))}
                    >
                      person_remove
                    </span>
                  ) : (
                    <span
                      class="material-icons cursor-pointer text-green-500"
                      onClick={() => dispatch(followUserFn(user._id))}
                    >
                      person_add
                    </span>
                  )}
                </li>
              </ul>
            ))}
          </div>

          <div class="copyright text-center">
            <span class="text-sm font-sm text-black">
              © 2022{" "}
              <a
                href="https://github.com/iprankurpandey"
                class="decoration-none text-sky-500"
              >
                Prankur Pandey
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSidebar;
