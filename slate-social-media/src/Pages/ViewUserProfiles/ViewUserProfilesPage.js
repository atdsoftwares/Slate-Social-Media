import {
  useDispatch,
  useSelector,
  useEffect,
  React,
} from "../../Utils/SystemUtils";
import {
  Footer,
  Header,
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
      <Header />
      <Viewuserprofile />

      {getPostsByUserName.map((newpostdata) => {
        return (
          <Viewuserprofilecard
            key={newpostdata._id}
            newpostdata={newpostdata}
          />
        );
      })}

      <Sidebar />
      <Footer />
    </div>
  );
}

export default ViewUserProfilesPage;
