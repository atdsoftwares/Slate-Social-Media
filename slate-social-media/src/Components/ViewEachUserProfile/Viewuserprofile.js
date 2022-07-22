import {
  useEffect,
  useDispatch,
  useSelector,
  useParams,
} from "../../Utils/SystemUtils";
import { getUserDetailsByIdFn } from "../../redux/reducers/usersSlice";
import "./Viewuserprofile.css";

function Viewuserprofile() {
  const getUsersbyId = useSelector((state) => state.users.getUsersbyId);

  const paramsId = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetailsByIdFn(paramsId));
  }, [paramsId]);

  const {
    avatar,
    bgImg,
    fullName,
    followers,
    following,
    username,
    job_description,
  } = getUsersbyId;

  return (
    <div className="composed-post">
      <div div className="post-model1">
        <img src={bgImg} alt="bgposter" className="bg-poster-img" />
        <img src={avatar} alt="avatar" className="avatar-profile-img" />
        <div className="btn-text-profile1">
          <h3 className="profile-user-name"> {fullName}</h3>
          <sub> @{username}</sub>
          <p> {job_description}</p>
        </div>

        <div className="profile-counter1">
          <div className="profiler-followers">
            Follower: {followers && followers.length}
          </div>
          <div className="profiler-following">
            Following: {following && following.length}
          </div>
          <div className="profiler-post"> posts : 10</div>
        </div>
      </div>
    </div>
  );
}

export default Viewuserprofile;
