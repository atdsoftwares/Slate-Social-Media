import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followUserFn,
  getUserDetailsFn,
} from "../../redux/reducers/usersSlice";
import { useLoginSignupContext } from "../Context/LoginSignupContext";
import { useUserContext } from "../Context/UserContext";
// import { followUserFn } from "../Services/Follow-Unfollow/Follow-Unfollow-services";
// import { getUserDetailsFn } from "../Services/User/Userservices";
import "./Profileview.css";
function Profileview() {
  // const { getUserDetails, userDispatch } = useUserContext();
  const getUserDetails = useSelector((state) => state.users.getUserDetails);

  // const { loginData } = useLoginSignupContext();
  const loginData = useSelector((state) => state.auth.loginData);
  const _id = loginData._id;

  const userId = _id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetailsFn(_id));
  }, []);

  const { avatar, bgImg, fullName, followers, following, username } =
    getUserDetails;

  return (
    <div className="composed-post">
      <div div className="post-model1">
        <img src={bgImg} alt="bgposter" className="bg-poster-img" />
        <img src={avatar} alt="avatar" className="avatar-profile-img" />
        <div className="btn-text-profile">
          <h3 className="profile-user-name"> {fullName}</h3>
          <sub> @{username}</sub>

          {/* <button
            className="btn btn-warning-outline bnt-follow"
            onClick={() => followUserFn(userId)}
          >
            Follow
            <span class="material-icons profilemi">person_add</span>
          </button> */}
        </div>
        <div className="profile-counter">
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

export default Profileview;
