import React, { useEffect, useState } from "react";
import { useCommentContext } from "../Context/CommentsContext";
import { useUserContext } from "../Context/UserContext";
import {
  downvoteCommentFn,
  postCommentFn,
  upvoteCommentFn,
} from "../Services/Comments/Commentsservices";
import { getPostsbyIdFn } from "../Services/Post/Postservices";

import "./Commentsmodel.css";
function Commentsmodel({ commentsdata }) {
  const { getUserDetails } = useUserContext();
  const { commentsDispatch, commentBoxInput } = useCommentContext();

  const { _id, avatar, fullName, content, image, video, username, comments } =
    commentsdata;

  const comment = commentBoxInput;

  useEffect(() => {
    getPostsbyIdFn(commentsDispatch, _id);
  }, [commentsdata]);

  function submitComment(e) {
    e.preventDefault();
    postCommentFn(commentsDispatch, _id, comment);
  }

  return (
    <div className="comments-container">
      <div class="f-card">
        <div class="header">
          <div class="options">
            <i class="fa fa-chevron-down"></i>
          </div>
          <img class="co-logo" src={avatar} alt="user-avatar" />
          <div class="co-name">
            <span> {fullName}</span>
            <div>{username}</div>
          </div>
          <div class="time">
            <span href="#">Posted at : {Date()}</span>
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
        <div className="comment-box-data">
          <img
            className="avatar_image"
            src={getUserDetails.avatar}
            alt="user-avatar"
          ></img>
          <form onSubmit={submitComment}>
            <div className="form-container">
              <input
                type="text"
                required
                className="input-comment-text"
                onChange={(e) =>
                  commentsDispatch({
                    type: "COMMENT_BOX_INPUT",
                    payload: e.target.value,
                  })
                }
              />

              <input type="submit" className="btn-submit" />
            </div>
          </form>
        </div>

        {comments?.map((c) => {
          const commentId = c._id;
          const postId = _id;
          return (
            <div className="comment-box-data1">
              <div className="username-and-avatar">
                <img
                  className="avatar_image"
                  src={c.avatar}
                  alt="user-avatar"
                />
                @{c.username}
                <hr />
              </div>
              <p className="text-content">{c?.text}</p>

              <span
                class="material-icons commentsmi"
                onClick={() =>
                  upvoteCommentFn(commentsDispatch, postId, commentId)
                }
              >
                thumb_up_off_alt
              </span>
              {c.votes.upvotedBy.length}

              <span
                class="material-icons commentsmi"
                onClick={() =>
                  downvoteCommentFn(commentsDispatch, postId, commentId)
                }
              >
                thumb_down_off_alt
              </span>
              {c.votes.downvotedBy.length}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Commentsmodel;
