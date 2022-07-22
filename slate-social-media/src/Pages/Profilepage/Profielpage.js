import {
  React,
  useEffect,
  useDispatch,
  useSelector,
} from "../../Utils/SystemUtils";

import { getPostByUserNameFn } from "../../redux/reducers/postsSlice";
import {
  Header,
  Profileview,
  Sidebar,
  Profielpagepostcard,
  Footer,
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
      <Header />
      <Sidebar />
      <Profileview />
      {/* <PostModel/> */}

      {getPostsByUserName.map((newpostdata) => {
        return (
          <Profielpagepostcard
            key={newpostdata._id}
            newpostdata={newpostdata}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default Profielpage;
