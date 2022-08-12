import {
  React,
  useDispatch,
  useSelector,
  useEffect,
} from "../../Utils/SystemUtils";
import { getComposedPostFn } from "../../redux/reducers/postsSlice";
import {
  AccountSidebar,
  Postcard,
  Sidebar,
} from "../../Components/IndexAllComponents";
function Explorepage() {
  const dispatch = useDispatch();
  const likespost = useSelector((state) => state.posts.likespost);
  const getComposePost = useSelector((state) => state.posts.getComposePost);

  useEffect(() => {
    dispatch(getComposedPostFn());
  }, [likespost]);

  return (
    <div>
      <div className="flex w-full justify-between items-start">
        <Sidebar />
        <div className="w-full flex-col flex justify-center  ">
          {getComposePost.map((postdata) => {
            return <Postcard postdata={postdata} key={postdata._id} />;
          })}
        </div>
        <AccountSidebar />
      </div>
    </div>
  );
}

export default Explorepage;
