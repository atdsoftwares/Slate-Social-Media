import {
  React,
  useDispatch,
  useSelector,
  useEffect,
} from "../../Utils/SystemUtils";
import { getComposedPostFn } from "../../redux/reducers/postsSlice";
import "./Explorepage.css";
import {
  Footer,
  Header,
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
      <Header />
      <Sidebar />
      <div className="explore-page-post-card">
        {getComposePost.map((postdata) => {
          return <Postcard postdata={postdata} key={postdata._id} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Explorepage;
