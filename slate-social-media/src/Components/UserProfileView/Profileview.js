import {
  React,
  useEffect,
  useDispatch,
  useSelector,
} from "../../Utils/SystemUtils";
import { getUserDetailsFn } from "../../redux/reducers/usersSlice";

import "./Profileview.css";
function Profileview() {
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const loginData = useSelector((state) => state.auth.loginData);
  const _id = loginData._id;

  const userId = _id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetailsFn(_id));
  }, []);

  const {
    avatar,
    bgImg,
    fullName,
    followers,
    following,
    username,
    job_description,
  } = getUserDetails;
  const coverStyle = {
    height: "160px",
    width: "100%",
    borderRadius: "5px 5px 0 0",
    backgroundImage: "url(" + bgImg + ")",
    backgroundPosition: "center" /* Center the image */,
    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
    backgroundSize:
      "cover" /* Resize the background image to cover the entire container */,
  };
  return (
    <div>
      <div class="container">
        <div
          // class="cover-photo"
          style={coverStyle}
        >
          <img src={avatar} class="profile" alt="profile-pic" />
        </div>
        <div class="profile-name">{fullName} </div>
        <p class="about">{job_description}</p>
        <div className="social-numbers">
          <div className="following">
            Following
            <span class="profile-icons">{following && following.length}</span>
          </div>
          <div className="follow">
            Followers
            <span class="profile-icons">{followers.length}</span>
          </div>
          <div class="posts">
            Posts
            <span class="profile-icons">{10}</span>
          </div>
        </div>
        {/* <button class="btn btn-danger-outline">Following</button> */}
      </div>
    </div>
  );
}

export default Profileview;
