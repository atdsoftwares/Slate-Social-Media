import {
  useDispatch,
  useSelector,
  useEffect,
  React,
} from "../../Utils/SystemUtils";
import {
  Sidebar,
  Viewuserprofile,
  Viewuserprofilecard,
} from "../../Components/IndexAllComponents";
import { getPostByUserNameFn } from "../../redux/reducers/postsSlice";

function ViewUserProfilesPage() {
  const dispatch = useDispatch();
  const getPostsByUserName = useSelector(
    (state) => state.posts.getPostsByUserName
  );
  const getUsersbyId = useSelector((state) => state.users.getUsersbyId);

  const { username } = getUsersbyId;

  useEffect(() => {
    dispatch(getPostByUserNameFn(username));
  }, [username]);

  return (
    <div>
      <Sidebar />
      <Viewuserprofile />

      {getPostsByUserName.map((newpostdata) => {
        return (
          <Viewuserprofilecard
            key={newpostdata._id}
            newpostdata={newpostdata}
          />
        );
      })}
    </div>
  );
}

export default ViewUserProfilesPage;
