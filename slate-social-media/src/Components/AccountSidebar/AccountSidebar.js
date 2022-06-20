import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoginSignupContext } from "../Context/LoginSignupContext";
import { useUserContext } from "../Context/UserContext";
import {
  followUserFn,
  unFollowUserFn,
} from "../Services/Follow-Unfollow/Follow-Unfollow-services";
import { getUsersFn } from "../Services/User/Userservices";
import "./AccountSidebar.css";
function AccountSidebar() {
  const { getUsers, userDispatch, getUserDetails } = useUserContext();
  console.log(
    "🚀 ~ file: AccountSidebar.js ~ line 12 ~ AccountSidebar ~ getUsers",
    getUsers
  );

  const { following, followers } = getUsers;

  const { loginData } = useLoginSignupContext();

  const userId = getUserDetails._id;

  // getuserdetail from usercontext id , send the saeme id
  useEffect(() => {
    getUsersFn(userDispatch);
  }, [userDispatch]);

  return (
    <div className="accounts-follow">
      <input
        type="search"
        class="navigation__input-search-account"
        placeholder="search item"
      />

      {getUsers.map((user) => (
        <div className="account-follow-details" key={user._id}>
          <Link to={`/profile/${user._id}`}>
            <img src={user.avatar} alt="avatar" className="avatar-img" />
          </Link>
          <h3 className="account-follow-details-text-name">{user.fullName}</h3>

          {following?.find((userDetails) => userDetails._id === userId) ? (
            <p> following</p>
          ) : (
            <span
              class="material-icons followicon"
              onClick={() => followUserFn(userDispatch, user._id)}
            >
              person_add
            </span>
          )}
        </div>
      ))}
      <hr />
    </div>
  );
}

export default AccountSidebar;
