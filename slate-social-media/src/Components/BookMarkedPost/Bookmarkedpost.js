import React from "react";
import "./Bookmarkedpost.css";
function Bookmarkedpost() {
  return (
    <div className="composed-post">
      <div className="post-model">
        <div className="post-model-data">
          <img
            src="https://lucent-media.netlify.app/static/media/mock.669f89742966b5eddb17.jpg"
            alt="avatar"
            className="avatar-post-img"
          />
          <p className="text-post">
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ips{" "}
          </p>
        </div>
        <div className="actions-icons">
          {/* <span class="material-icons posticon">favorite_border</span>
          <span class="material-icons posticon">chat_bubble_outline</span> */}
          <span class="material-icons posticon">bookmark_outline</span>
        </div>
      </div>
    </div>
  );
}

export default Bookmarkedpost;
