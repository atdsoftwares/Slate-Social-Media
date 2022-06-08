import React, { useEffect } from "react";
import { useUserContext } from "../Context/UserContext";
import { getUsersFn } from "../Services/UserServices/Userservices";
import "./AccountSidebar.css";
function AccountSidebar() {
  const { state, userDispatch } = useUserContext();
  const { getUsers } = state;

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
        <div className="account-follow-details">
          <img src={user.avatar} alt="avatar" className="avatar-img" />
          <h3 className="account-follow-details-text-name">{user.fullName}</h3>
          <span class="material-icons followicon">person_add</span>
        </div>
      ))}
      <hr />
    </div>
  );
}

export default AccountSidebar;
