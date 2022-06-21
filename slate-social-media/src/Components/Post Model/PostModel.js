import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useComposePostContext } from "../Context/PostContext";
import { useUserContext } from "../Context/UserContext";
import {
  addPostToBookmarkFn,
  deletePostFn,
  dislikesPostFn,
  editPostFn,
  likesPostFn,
  removeBookmarkedPostsFn,
} from "../Services/Post/Postservices";
import "./PostModel.css";
function PostModel({ postdata }) {
  const {
    avatar,
    fullName,
    _id,
    username,
    content,
    createdAt,
    image,
    video,
    likes,
    likes: { likeCount, likedBy, dislikedBy },
    // updatedAt,
  } = postdata;

  const { getUserDetails } = useUserContext();
  const isLiked = likes.likedBy.find(
    (likedUser) => likedUser?.username === getUserDetails.username
  );

  const { postDispatch, addToBookmarks, getComposePost } =
    useComposePostContext();

  const [display, setDisplay] = useState("none");

  function toggleModal() {
    setDisplay(display === "none" ? "block" : "none");
  }
  return (
    <div className="post-container">
      <div class="f-card">
        <div class="header">
          <div class="options">
            <span class="material-icons postcardmi" onClick={toggleModal}>
              more_vert
            </span>
            <div className="modal-container" style={{ display: display }}>
              <Link to={`/edit/${_id}`}>
                <span
                  class="material-icons postcardmi"
                  onClick={() => editPostFn(_id, image, video, content)}
                >
                  edit
                </span>
              </Link>
              <span
                class="material-icons postcardmi"
                onClick={() => deletePostFn(postDispatch, _id)}
              >
                delete
              </span>
            </div>
          </div>

          <img class="co-logo" src={avatar} alt="user-avatar" />

          <div class="co-name">
            <span> {fullName}</span>
            <div>{username}</div>
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
        <div class="social">
          <div class="social-buttons">
            {getUserDetails?.username === isLiked?.username &&
            getUserDetails?._id ? (
              <span
                class="material-icons postcardmi"
                onClick={() => dislikesPostFn(postDispatch, _id)}
              >
                favorite
              </span>
            ) : (
              <span
                class="material-icons postcardmi"
                onClick={() => likesPostFn(postDispatch, _id)}
              >
                favorite_border
              </span>
            )}
            {likeCount}
            <Link to={`/comments/${_id}`}>
              <span class="material-icons postcardmi">chat_bubble_outline</span>
            </Link>
            {addToBookmarks.some((prod) => prod._id === postdata._id) ? (
              <span
                class="material-icons postcardmi"
                onClick={() => removeBookmarkedPostsFn(postDispatch, _id)}
              >
                bookmark
              </span>
            ) : (
              <span
                class="material-icons postcardmi"
                onClick={() => addPostToBookmarkFn(postDispatch, _id)}
              >
                bookmark_border
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModel;
