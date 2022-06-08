import React from "react";
import { Link } from "react-router-dom";
import "./PostModel.css";

function PostModel() {
  return (
    <div className="composed-post">
      <div className="post-model">
        <div className="post-model-data">
          <Link to="/profile">
            <div className="image-text">
              <img
                src="https://lucent-media.netlify.app/static/media/mock.669f89742966b5eddb17.jpg"
                alt="avatar"
                className="avatar-post-img"
              />
              <h3> Jaswant Pandey</h3>
            </div>
          </Link>
          <p className="text-post">
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not.
          </p>
        </div>
        <div className="actions-icons">
          <span class="material-icons posticon">favorite_border</span>
          <Link to="/comments">
            <span class="material-icons posticon">chat_bubble_outline</span>
          </Link>
          <span class="material-icons posticon">bookmark_outline</span>
        </div>
      </div>
    </div>
  );
}

export default PostModel;
