import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDetailsByIdFn } from "../../redux/reducers/usersSlice";
import { useUserContext } from "../Context/UserContext";
// import { getUserDetailsByIdFn } from "../Services/User/Userservices";
import "./Viewuserprofile.css";
function Viewuserprofile() {
  // const { getUsersbyId, userDispatch } = useUserContext();
  const getUsersbyId = useSelector((state) => state.users.getUsersbyId);

  const paramsId = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetailsByIdFn(paramsId));
  }, [paramsId]);

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
