import React, { useEffect, useState } from "react";
import { useComposePostContext } from "../Context/PostContext";
import { v4 as uuid } from "uuid";
import RTEeditor from "../RTEeditor/RTEeditor";
import { composeNewPostFn } from "../Services/Post/Postservices";
import "./Posteditor.css";
import { useUserContext } from "../Context/UserContext";
import { useLoginSignupContext } from "../Context/LoginSignupContext";
import { getUserDetailsFn } from "../Services/User/Userservices";
function Posteditor() {
  const { postDispatch, state } = useComposePostContext();
  const { video, image, composePost, editorText } = state;
  const { getUserDetails, userDispatch } = useUserContext();

  const { loginData } = useLoginSignupContext();
  const _id = loginData._id;

  useEffect(() => {
    getUserDetailsFn(userDispatch, _id);
  }, []);

  const { avatar, username } = getUserDetails;

  function handleImage(e) {
    postDispatch({
      type: "IMAGE",
      payload: URL.createObjectURL(e.target.files[0]),
    });
  }

  function handleVideo(e) {
    postDispatch({
      type: "VIDEO",
      payload: URL.createObjectURL(e.target.files[0]),
    });
  }

  const post = { _id: uuid(), content: editorText, image: image, video: video };

  function submitForm(e) {
    e.preventDefault();
    composeNewPostFn(postDispatch, post);
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="rte-editor">
          <div className="avatar-editor">
            <div>
              <img src={avatar} alt="avatar" className="avatar-img" />
              <div> @{username}</div>
            </div>
            <RTEeditor editorText={editorText} />
          </div>
          <div className="icons-button">
            <label>
              <input type="file" accept="video/*" onChange={handleVideo} />
              <span className="material-icons rte-icons1">videocam </span>
            </label>
            <label>
              <input type="file" accept="image/*" onChange={handleImage} />

              <span className="material-icons rte-icons1">image </span>
            </label>
            <input type="submit" className="btn btn-warning" />
          </div>
        </div>
      </form>
      <div className="media-preview">
        <h3 className="preview-text"> preview your data</h3>
        {image !== null && (
          <div>
            <img alt="not found" className="preview-image" src={image} />
          </div>
        )}

        {video && (
          <div>
            <video className="video-preview" controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
}

export default Posteditor;
