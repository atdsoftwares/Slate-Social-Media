import {
  useEffect,
  useState,
  useDispatch,
  useSelector,
} from "../../Utils/SystemUtils";

import {
  downvoteCommentFn,
  postCommentFn,
  upvoteCommentFn,
} from "../../redux/reducers/commentsSlice";
import { getPostsbyIdFn } from "../../redux/reducers/postsSlice";

import "./Commentsmodel.css";
function Commentsmodel({ commentsdata }) {
  const composeComment = useSelector((state) => state.comments.composeComment);
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const [commentBoxInput, setCommentBoxInput] = useState();

  const {
    _id,
    avatar,
    fullName,
    content,
    image,
    video,
    username,
    comments,
    pdf,
  } = commentsdata;

  const comment = commentBoxInput;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsbyIdFn(_id));
  }, [composeComment]);

  function submitComment(e) {
    e.preventDefault();
    dispatch(postCommentFn({ _id, comment }));
    setCommentBoxInput("");
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
            {pdf && <embed class="reference-pdf" src={pdf} />}
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
                value={commentBoxInput}
                required
                className="input-comment-text"
                placeholder="Write a comment..."
                onChange={(e) => setCommentBoxInput(e.target.value)}
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
                onClick={() => dispatch(upvoteCommentFn({ postId, commentId }))}
              >
                thumb_up_off_alt
              </span>
              {c.votes.upvotedBy.length}

              <span
                class="material-icons commentsmi"
                onClick={() =>
                  dispatch(downvoteCommentFn({ postId, commentId }))
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
