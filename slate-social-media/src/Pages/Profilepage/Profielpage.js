import {
  React,
  useEffect,
  useDispatch,
  useSelector,
} from "../../Utils/SystemUtils";

import { getPostByUserNameFn } from "../../redux/reducers/postsSlice";
import {
  Profileview,
  Sidebar,
  Profielpagepostcard,
  AccountSidebar,
} from "../../Components/IndexAllComponents";

function Profielpage() {
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const { username } = getUserDetails;
  const getPostsByUserName = useSelector(
    (state) => state.posts.getPostsByUserName
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostByUserNameFn(username));
  }, [username]);
  return (
    <div>
      <div className="flex w-full justify-center items-start">
        <Sidebar />
        <div className="w-full flex-col flex justify-center  ">
          <Profileview />
          {getPostsByUserName.map((newpostdata) => {
            return (
              <Profielpagepostcard
                key={newpostdata._id}
                newpostdata={newpostdata}
              />
            );
          })}
        </div>
        <AccountSidebar />
      </div>
    </div>
  );
}

export default Profielpage;
