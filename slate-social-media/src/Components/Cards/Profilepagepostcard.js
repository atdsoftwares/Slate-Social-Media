import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useComposePostContext } from "../Context/PostContext";
import { useUserContext } from "../Context/UserContext";
import "./Profilepagepostcard.css";
function Profielpagepostcard({ newpostdata }) {
  const { avatar, username, content, fullName, createdAt, image, video } =
    newpostdata;
  return (
    <div className="post-container">
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

export default Profielpagepostcard;
