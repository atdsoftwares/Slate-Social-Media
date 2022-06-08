import React from "react";
import "./AccountSidebar.css";
function AccountSidebar() {
  return (
    <div className="accounts-follow">
      <input
        type="search"
        class="navigation__input-search-account"
        placeholder="search item"
      />

      <div className="account-follow-details">
        <img
          src="https://lucent-media.netlify.app/static/media/mock.669f89742966b5eddb17.jpg"
          alt="avatar"
          className="avatar-img"
        />
        <h3 className="account-follow-details-text-name">Jaswant pandey</h3>
        <span class="material-icons followicon">person_add</span>
      </div>
      <hr />
    </div>
  );
}

export default AccountSidebar;
