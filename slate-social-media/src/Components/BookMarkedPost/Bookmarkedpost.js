import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoginSignupContext } from "../Context/LoginSignupContext";
import { useUserContext } from "../Context/UserContext";
import { getUserDetailsFn } from "../Services/User/Userservices";
import "./Bookmarkedpost.css";
function Bookmarkedpost() {
  const { getUserDetails, userDispatch } = useUserContext();

  const { loginData } = useLoginSignupContext();
  const username = loginData._id;

  useEffect(() => {
    getUserDetailsFn(userDispatch, username);
  }, []);

  const { avatar } = getUserDetails;
  return (
    <div className="post-container">
      <div class="f-card">
        <div class="header">
          <div class="options">
            <i class="fa fa-chevron-down"></i>
          </div>
          <img
            class="co-logo"
            src="http://placehold.it/40x40"
            alt="user-avatar"
          />
          <div class="co-name">
            <p>Tanaay Praatp</p>
          </div>
          <div class="time">
            <span href="#">Posted at : {Date()}</span>
          </div>
        </div>
        <div class="content">
          <p>
            Height is optional, if no height is specified the image will be a
            square.Example: text area content
          </p>
        </div>

        <div class="reference">
          <div class="reference-content">
            <img class="reference-thumb" src="/" alt="uploaded-by-user" />
            <video class="reference-video" src="/" controls />
          </div>
        </div>
        <div class="social">
          <div class="social-buttons">
            {/* <span class="material-icons postcardmi">thumb_up_off_alt</span> */}
            <span class="material-icons postcardmi">bookmark_border</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookmarkedpost;
