import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
import { getUserDetailsByIdFn } from "../Services/User/Userservices";
import "./Viewuserprofile.css";
function Viewuserprofile() {
  const { getUsersbyId, userDispatch } = useUserContext();

  const paramsId = useParams();

  useEffect(() => {
    getUserDetailsByIdFn(userDispatch, paramsId);
  }, [userDispatch, paramsId]);

  const { avatar, bgImg, fullName, followers, following, username } =
    getUsersbyId;

  return (
    <div className="composed-post">
      <div div className="post-model1">
        <img src={bgImg} alt="bgposter" className="bg-poster-img" />
        <img src={avatar} alt="avatar" className="avatar-profile-img" />
        <div className="btn-text-profile1">
          <h3 className="profile-user-name"> {fullName}</h3>
          <sub> @{username}</sub>
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
