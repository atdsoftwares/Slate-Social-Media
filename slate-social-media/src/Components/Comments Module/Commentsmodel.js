import React from "react";
import { Link } from "react-router-dom";
import PostModel from "../../Components/Post Model/PostModel";
import { useUserContext } from "../Context/UserContext";
import "./Commentsmodel.css";
function Commentsmodel() {
  return (
    <div className="comments-container">
      <div class="f-card">
        <div class="header">
          <div class="options">
            <i class="fa fa-chevron-down"></i>
          </div>

          <img class="co-logo" src="/" alt="user-avatar" />

          <div class="co-name">
            <span> Prankur</span>
            <div>iprankur</div>
          </div>
          <div class="time">
            <span href="#">Posted at : {Date()}</span>
          </div>
        </div>
        <div
          class="content"
          dangerouslySetInnerHTML={{ __html: "content" }}
        ></div>

        <div class="reference">
          <div class="reference-content">
            {/* {image && ( */}
            <img class="reference-thumb" src="/" alt="uploaded-by-user" />
            {/* )} */}
            {/* {video && */}
            <video class="reference-video" src="/" controls />
            {/* } */}
          </div>
        </div>
        <div class="social">
          <div class="social-buttons">
            <span class="material-icons postcardmi">thumb_up_off_alt</span>
            {/* <Link to="/comments">
              <span class="material-icons postcardmi">chat_bubble_outline</span>
            </Link> */}
            <span class="material-icons postcardmi">bookmark_border</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commentsmodel;
