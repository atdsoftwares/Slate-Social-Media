import { useDispatch, useSelector, useEffect } from "../../Utils/SystemUtils";
import { getBookmarkedPostsFn } from "../../redux/reducers/postsSlice";
import {
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
      <Header />
      <Sidebar />
      <div style={{ marginTop: "5rem" }}>
        {addToBookmarks.map((postdata) => {
          return <Postcard postdata={postdata} key={postdata._id} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Bookmarkpage;
