import React, { useEffect } from "react";
import { useLoginSignupContext } from "../Context/LoginSignupContext";
import { useUserContext } from "../Context/UserContext";
import {
  followUserFn,
  unFollowUserFn,
} from "../Services/Follow-Unfollow/Follow-Unfollow-services";
import { getUserDetailsFn, getUsersFn } from "../Services/User/Userservices";
import "./Profileview.css";
function Profileview() {
  const { state, userDispatch } = useUserContext();
  const { getUserDetails } = state;

  const { loginData } = useLoginSignupContext();
  const _id = loginData._id;
  const userId = _id;

  useEffect(() => {
    getUserDetailsFn(userDispatch, _id);
  }, []);

  const { avatar, bgImg, fullName, followers, following, username } =
    getUserDetails;
  console.log(
    "🚀 ~ file: Profileview.js ~ line 23 ~ Profileview ~ username",
    username
  );

  return (
    <div className="composed-post">
      <div div className="post-model1">
        <img src={bgImg} alt="bgposter" className="bg-poster-img" />
        <img src={avatar} alt="avatar" className="avatar-profile-img" />
        <div className="btn-text-profile">
          <h3 className="profile-user-name"> {fullName}</h3>
          <sub> @{username}</sub>

          {loginData.username === username ? (
            <button
              className="btn btn-warning-outline bnt-follow"
              // onClick={() => unFollowUserFn(userDispatch, userId)}
            >
              edit
              <span class="material-icons profilemi">edit</span>
            </button>
          ) : (
            <button
              className="btn btn-warning-outline bnt-follow"
              onClick={() => followUserFn(userDispatch, userId)}
            >
              Follow
              <span class="material-icons profilemi">person_add</span>
            </button>
          )}
        </div>
        <div className="profile-counter">
          <div className="profiler-followers">Follower: {followers.length}</div>
          <div className="profiler-following">
            Following: {following.length}
          </div>
          <div className="profiler-post"> posts : 10</div>
        </div>
      </div>
    </div>
  );
}

export default Profileview;
