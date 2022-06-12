import React, { useEffect } from "react";
import { useLoginSignupContext } from "../Context/LoginSignupContext";
import { useUserContext } from "../Context/UserContext";
import { getUserDetailsFn, getUsersFn } from "../Services/User/Userservices";
import "./Profileview.css";
function Profileview() {
  const { state, userDispatch } = useUserContext();
  const { getUserDetails } = state;

  const { loginData } = useLoginSignupContext();
  const _id = loginData._id;

  useEffect(() => {
    getUserDetailsFn(userDispatch, _id);
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
          <button className="btn btn-warning-outline bnt-follow">
            Follow
            <span class="material-icons profilemi">person_add</span>
          </button>
        </div>
        <div className="profile-counter">
          <div className="profiler-followers"> Follower: {followers}</div>
          <div className="profiler-following">Following: {following}</div>
          <div className="profiler-post"> posts : 10</div>
        </div>
      </div>
    </div>
  );
}

export default Profileview;
