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
  const customeStyle = {
    height: "25%",
    width: "25%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    boxShadowm: "0px 0px 10px rgba(0,0,0,0.5)",
  };
  const customeStyleimg = {
    height: "50%",
    width: "80%",
    backgroundSize: "initial",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="composed-post" style={customeStyle}>
      <img src={bgImg} alt="bgimage" style={customeStyleimg} />
      <aside class="">
        <div class="bg-white shadow rounded-lg p-10">
          <div class="flex flex-col gap-1 text-center items-center">
            <img
              class="h-32 w-32 bg-white p-2 rounded-full shadow mb-4"
              src={avatar}
              alt=""
            />
            <p class="font-semibold">{fullName}</p>
            <div> Full Stack Developer</div>
          </div>
          <div class="flex justify-center items-center gap-2 my-3">
            <div class="font-semibold text-center mx-4">
              <p class="text-black">102</p>
              <span class="text-gray-400">Posts</span>
            </div>
            <div class="font-semibold text-center mx-4">
              <p class="text-black">{followers && followers.length}</p>
              <span class="text-gray-400">Followers</span>
            </div>
            <div class="font-semibold text-center mx-4">
              <p class="text-black">{following && following.length}</p>
              <span class="text-gray-400">Folowing</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Profileview;
