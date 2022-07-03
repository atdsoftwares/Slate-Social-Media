import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  followUserFn,
  getUsersFn,
  unFollowUserFn,
} from "../../redux/reducers/usersSlice";
import { useDispatch, useSelector } from "react-redux";

import "./AccountSidebar.css";
function AccountSidebar() {
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const getUsers = useSelector((state) => state.users.getUsers);

  const dispatch = useDispatch();
  const { following } = getUserDetails;

  // getuserdetail from usercontext id , send the saeme id
  useEffect(() => {
    dispatch(getUsersFn());
  }, []);

  return (
    <div className="accounts-follow">
      <input
        type="search"
        class="navigation__input-search-account"
        placeholder="search item"
      />

      {getUsers.map((user) => (
        <div className="account-follow-details" key={user._id}>
          <Link to={`/ViewProfile/${user._id}`}>
            <img src={user.avatar} alt="avatar" className="avatar-img" />
          </Link>
          <h3 className="account-follow-details-text-name">{user.fullName}</h3>

          {following && following?.some((u) => u._id === user._id) ? (
            <span
              class="material-icons followicon"
              onClick={() => dispatch(unFollowUserFn(user._id))}
            >
              person_remove
            </span>
          ) : (
            <span
              class="material-icons followicon"
              onClick={() => dispatch(followUserFn(user._id))}
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
