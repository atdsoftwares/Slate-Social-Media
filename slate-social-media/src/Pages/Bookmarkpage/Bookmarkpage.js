import { useDispatch, useSelector, useEffect } from "../../Utils/SystemUtils";
import { getBookmarkedPostsFn } from "../../redux/reducers/postsSlice";
import {
  AccountSidebar,
  Footer,
  Header,
  Postcard,
  Sidebar,
} from "../../Components/IndexAllComponents";

function Bookmarkpage() {
  const dispatch = useDispatch();
  const addToBookmarks = useSelector((state) => state.posts.addToBookmarks);

  useEffect(() => {
    dispatch(getBookmarkedPostsFn());
  }, []);

  return (
    <div>
      <div className="flex w-full justify-between items-start">
        <Sidebar />
        <div className="w-full flex-col flex justify-center  ">
          {addToBookmarks && addToBookmarks.length <= 0 ? (
            <h1 className="text-lg text-center mt-2 text-white">
              No Bookmarks to display!
            </h1>
          ) : (
            addToBookmarks &&
            addToBookmarks.map((postdata) => {
              return <Postcard postdata={postdata} key={postdata._id} />;
            })
          )}
        </div>
        <AccountSidebar />
      </div>
    </div>
  );
}

export default Bookmarkpage;
