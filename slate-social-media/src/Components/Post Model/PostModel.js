import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addPostToBookmarkFn,
  deletePostFn,
  dislikesPostFn,
  editPostFn,
  likesPostFn,
  removeBookmarkedPostsFn,
} from "../../redux/reducers/postsSlice";
// import { useComposePostContext } from "../Context/PostContext";
// import { useUserContext } from "../Context/UserContext";
// import {
//   addPostToBookmarkFn,
//   deletePostFn,
//   dislikesPostFn,
//   editPostFn,
//   likesPostFn,
//   removeBookmarkedPostsFn,
// } from "../Services/Post/Postservices";
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
    pdf,
    comments,
    likes: { likeCount, likedBy, dislikedBy },
    // updatedAt,
  } = postdata;
  console.log("🚀 ~ file: PostModel.js ~ line 39 ~ PostModel ~ image", image);
  console.log("🚀 ~ file: PostModel.js ~ line 39 ~ PostModel ~ video", video);
  console.log("🚀 ~ file: PostModel.js ~ line 39 ~ PostModel ~ image", pdf);

  // const { getUserDetails } = useUserContext();
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const isLiked = likes.likedBy.find(
    (likedUser) => likedUser?.username === getUserDetails.username
  );
  const dispatch = useDispatch();
  const addToBookmarks = useSelector((state) => state.posts.addToBookmarks);

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
                  onClick={() =>
                    dispatch(editPostFn(_id, image, video, content, pdf))
                  }
                >
                  edit
                </span>
              </Link>
              <span
                class="material-icons postcardmi"
                onClick={() => dispatch(deletePostFn(_id))}
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
            {image ? (
              <img class="reference-thumb" src={image} alt="uploaded-by-user" />
            ) : (
              <div>{null} </div>
            )}
            {video ? (
              <video class="reference-video" src={video} controls />
            ) : (
              <div>{null} </div>
            )}

            {pdf ? (
              <embed class="reference-video" src={pdf} />
            ) : (
              <div> {null}</div>
            )}
          </div>
        </div>
        <div class="social">
          <div class="social-buttons">
            <div style={{ color: "red", marginRight: "-5rem" }}>
              {likeCount}
            </div>
            {getUserDetails?.username === isLiked?.username &&
            getUserDetails?._id ? (
              <span
                class="material-icons postcardmi"
                onClick={() => dispatch(dislikesPostFn(_id))}
              >
                favorite
              </span>
            ) : (
              <span
                class="material-icons postcardmi"
                onClick={() => dispatch(likesPostFn(_id))}
              >
                favorite_border
              </span>
            )}

            <Link to={`/comments/${_id}`}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px",
                  fontSize: "1.1rem",
                  color: "red",
                }}
              >
                {comments && comments.length}
                <span class="material-icons postcardmi">
                  chat_bubble_outline
                </span>
              </div>
            </Link>
            {addToBookmarks.some((prod) => prod._id === postdata._id) ? (
              <span
                class="material-icons postcardmi"
                onClick={() => dispatch(removeBookmarkedPostsFn(_id))}
              >
                bookmark
              </span>
            ) : (
              <span
                class="material-icons postcardmi"
                onClick={() => dispatch(addPostToBookmarkFn(_id))}
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
