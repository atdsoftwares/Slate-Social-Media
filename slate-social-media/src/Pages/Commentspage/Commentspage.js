import {
  React,
  useEffect,
  useDispatch,
  useSelector,
  useParams,
} from "../../Utils/SystemUtils";
import { getPostsbyIdFn } from "../../redux/reducers/postsSlice";
import {
  Commentsmodel,
  Footer,
  Header,
  Sidebar,
} from "../../Components/IndexAllComponents";
function Commentspage() {
  // const commentsdata = useSelector((state) => state.comments.commentsdata);
  const getPostsbyId = useSelector((state) => state.posts.getPostsbyId);

  const _id = useParams();

  const newCommentsData = [{ ...getPostsbyId }];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsbyIdFn(_id._id));
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      {newCommentsData.map((newcommentdata) => {
        return (
          <Commentsmodel
            commentsdata={newcommentdata}
            key={newCommentsData._id}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default Commentspage;
