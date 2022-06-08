import React from "react";
import PostModel from "../../Components/Post Model/PostModel";
import "./Commentsmodel.css";
function Commentsmodel() {
  return (
    <div className="comments-container">
      <PostModel />
      <div className="img-input-btn">
        <img
          className="img-comment-avatar"
          alt="comment-avatar"
          src="https://lucent-media.netlify.app/static/media/mock.669f89742966b5eddb17.jpg"
        />
        <input type="text" className="input-text-comment" />
        <button className="btn btn-success-outline">comment</button>
      </div>

      <div className="comment-list">
        <img
          alt="comment-avatar"
          className="commnet-avatar-list-profile"
          src="https://lucent-media.netlify.app/static/media/mock.669f89742966b5eddb17.jpg"
        />

        <p>
          Jaswant Pandey
          <span className="replying-to"> replying to @iprankurpandey</span>
        </p>

        <p className="comment-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, nisi eu consectetur consectetur, nisi nisi consectetur, nisi
          nisi consectetur, nisi nisi consectetur
        </p>
      </div>
    </div>
  );
}

export default Commentsmodel;
