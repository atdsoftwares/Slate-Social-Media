import {
  React,
  useEffect,
  useDispatch,
  useSelector,
  useParams,
} from "../../Utils/SystemUtils";
import { getPostsbyIdFn } from "../../redux/reducers/postsSlice";
import {
  AccountSidebar,
  Commentsmodel,
  Sidebar,
} from "../../Components/IndexAllComponents";
function Commentspage() {
  const getPostsbyId = useSelector((state) => state.posts.getPostsbyId);
  const _id = useParams();
  const newCommentsData = [{ ...getPostsbyId }];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsbyIdFn(_id._id));
  }, []);

  return (
    <div className="flex w-full justify-between items-start">
      <Sidebar />
      {newCommentsData &&
        newCommentsData.map((newcommentdata) => {
          return (
            <Commentsmodel
              commentsdata={newcommentdata}
              key={newCommentsData._id}
            />
          );
        })}
      <AccountSidebar />
    </div>
  );
}

export default Commentspage;
