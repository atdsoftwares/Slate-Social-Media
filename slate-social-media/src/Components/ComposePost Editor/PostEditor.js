import React, { useState } from "react";
import RTEeditor from "../RTEeditor/RTEeditor";
import "./Posteditor.css";
function Posteditor() {
  const [video, setVideo] = useState("");
  console.log("🚀 ~ file: Postmodule.js ~ line 6 ~ Postmodule ~ video", video);

  return (
    <div>
      <div className="rte-editor">
        <div className="avatar-editor">
          <img
            src="https://lucent-media.netlify.app/static/media/mock.669f89742966b5eddb17.jpg"
            alt="avatar"
            className="avatar-img"
          />
          <RTEeditor />
        </div>
        <div className="icons-button">
          <label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
            />

            <span className="material-icons rte-icons1">videocam </span>
          </label>
          <label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setVideo(e.target.files[0])}
            />

            <span className="material-icons rte-icons1">image </span>
          </label>
          <button className="btn btn-warning">post</button>
        </div>
      </div>
    </div>
  );
}

export default Posteditor;
