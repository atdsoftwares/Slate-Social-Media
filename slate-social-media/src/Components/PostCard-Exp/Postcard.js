import React from "react";
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
import "./Postcard.css";
function Postcard({ postdata }) {
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
    job_description,
  } = postdata;
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const isLiked = likes.likedBy.find(
    (likedUser) => likedUser?.username === getUserDetails.username
  );
  const dispatch = useDispatch();
  const addToBookmarks = useSelector((state) => state.posts.addToBookmarks);

  return (
    <div className="postcard-container">
      <div class="post">
        <div class="post__header">
          <div class="material-icons sidebar__topAvatar">
            <img src={avatar} alt="avatar" className="post-card-avatar" />
          </div>
          <div class="post__info">
            <h2>{fullName}</h2>
            <p>{createdAt}</p>
          </div>
        </div>

        <div class="post__body">
          <p>{content}</p>
        </div>
        <hr className="laxman-rekha" />
        <div class="feed__inputOptions">
          <div class="inputOption">
            {likeCount}
            {getUserDetails?.username === isLiked?.username &&
            getUserDetails?._id ? (
              <span
                class="material-icons "
                onClick={() => dispatch(dislikesPostFn(_id))}
              >
                favorite
              </span>
            ) : (
              <span
                class="material-icons"
                onClick={() => dispatch(likesPostFn(_id))}
              >
                favorite_border
              </span>
            )}
            {/* <h4>Like</h4> */}
          </div>
          <div class="inputOption">
            {comments.length}
            <Link to={`/comments/${_id}`}>
              <div style={{ color: "gray" }} class="material-icons">
                comment{" "}
              </div>
            </Link>
            {/* <h4>Comment</h4> */}
          </div>
          <div class="inputOption">
            {addToBookmarks.some((prod) => prod._id === postdata._id) ? (
              <span
                class="material-icons "
                onClick={() => dispatch(removeBookmarkedPostsFn(_id))}
              >
                bookmark
              </span>
            ) : (
              <span
                class="material-icons "
                onClick={() => dispatch(addPostToBookmarkFn(_id))}
              >
                bookmark_border
              </span>
            )}
            {/* <h4>Bookmark</h4> */}
          </div>
          <div class="inputOption">
            <Link to={`/edit/${_id}`}>
              <span
                class="material-icons "
                onClick={() =>
                  dispatch(editPostFn(_id, image, video, content, pdf))
                }
              >
                edit
              </span>
            </Link>
            {/* <h4>Edit</h4> */}
          </div>
          <div class="inputOption">
            <div
              style={{ color: "gray" }}
              class="material-icons"
              onClick={() => dispatch(deletePostFn(_id))}
            >
              delete
            </div>
            {/* <h4>Delete</h4> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postcard;
