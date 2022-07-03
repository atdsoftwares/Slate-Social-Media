import React from "react";
import "./Viewuserprofilecard.css";
function Viewuserprofilecard({ newpostdata }) {
  const { _id, avatar, fullName, username, image, video, content, createdAt } =
    newpostdata;
  return (
    <div className="post-container" key={_id}>
      <div class="f-card">
        <div class="header">
          <div class="options"></div>

          <img class="co-logo" src={avatar} alt="user-avatar" />

          <div class="co-name">
            <span> {fullName}</span>
            <div>@{username}</div>
          </div>
          <div class="time">
            <span href="#">Posted at : {createdAt}</span>
          </div>
        </div>
        <div
          class="content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>

        <div class="reference">
          <div class="reference-content">
            {image && (
              <img class="reference-thumb" src={image} alt="uploaded-by-user" />
            )}
            {video && <video class="reference-video" src={video} controls />}
          </div>
        </div>
        <div class="social"></div>
      </div>
    </div>
  );
}

export default Viewuserprofilecard;
