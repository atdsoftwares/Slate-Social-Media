import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useComposePostContext } from "../Context/PostContext";
import { useUserContext } from "../Context/UserContext";
import {
  addPostToBookmarkFn,
  deletePostFn,
  editPostFn,
  removeBookmarkedPostsFn,
} from "../Services/Post/Postservices";
import "./PostModel.css";
function PostModel({ postdata }) {
  const {
    _id,
    username,
    content,
    createdAt,
    image,
    video,

    // likes: { likeCount, likedBy, dislikedBy },
    // updatedAt,
  } = postdata;

  const { state } = useUserContext();
  const { getUsers } = state;
  const { postDispatch, addToBookmarks } = useComposePostContext();
  console.log(
    "🚀 ~ file: PostModel.js ~ line 28 ~ PostModel ~ addToBookmarks",
    addToBookmarks
  );
  const userdata = getUsers.filter((u) => u.username === username);
  const { avatar, fullName } = userdata[0];

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
            <span class="material-icons postcardmi">thumb_up_off_alt</span>
            <Link to="/comments">
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
