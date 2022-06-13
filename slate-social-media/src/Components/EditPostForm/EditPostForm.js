import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLoginSignupContext } from "../Context/LoginSignupContext";
import { useComposePostContext } from "../Context/PostContext";
import { useUserContext } from "../Context/UserContext";
import RTEeditor from "../RTEeditor/RTEeditor";
import { getComposedPostFn } from "../Services/Post/Postservices";
import { getUserDetailsFn } from "../Services/User/Userservices";
import "./EditPostForm.css";

function EditPostForm() {
  const { image, video, editorText, createdAt, postDispatch } =
    useComposePostContext();
  const { getUsers } = useUserContext();

  const [_id, setId] = useState();
  const { state, userDispatch } = useUserContext();
  const { getUserDetails } = state;

  const { username } = getUserDetails;
  const userdata = getUsers.filter((u) => u.username === username);
  const { avatar, fullName } = userdata[0];

  async function updatePostFn(e) {
    e.preventDefault();
    const post = { _id, content: editorText, image: image, video: video };
    const response = await axios({
      method: "post",
      url: `/api/posts/edit/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { postData: { ...post } },
    })
      .then((response) => {
        postDispatch({
          type: "COMPOSE_POST",
          payload: response.data.posts,
        });
      })
      .catch((error) => {
        console.log(`something went wrong`, error);
      });
  }

  useEffect(() => {
    setId(localStorage.getItem("id"));
    postDispatch({
      type: "EDITOR_TEXT",
      payload: localStorage.getItem("content", editorText),
    });
    postDispatch({
      type: "IMAGE",
      payload: localStorage.getItem("image", image),
    });
    postDispatch({
      type: "VIDEO",
      payload: localStorage.getItem("video", video),
    });
  }, []);

  function handleImage(e) {
    postDispatch({
      type: "IMAGE",
      payload: URL.createObjectURL(e.target.files[0]),
    });
  }

  function handleVideo(e) {
    console.log("video");
    postDispatch({
      type: "VIDEO",
      payload: URL.createObjectURL(e.target.files[0]),
    });
  }
  const navigate = useNavigate();
  function updateEditedPostFn(e) {
    e.preventDefault();
    updatePostFn();
    // navigate("/explore");
  }

  return (
    <div className="post-container">
      <div class="f-card">
        <div class="header">
          <img class="co-logo" src={avatar} alt="user-avatar" />
          <div class="co-name">
            <span> {fullName}</span>
            <div>@{username}</div>
          </div>
          <div class="time">
            <span href="#">Posted at : {createdAt}</span>
          </div>
        </div>

        <form onClick={updatePostFn}>
          <RTEeditor content={editorText} />

          <div className="icons-button">
            <label>
              <input type="file" accept="video/*" onChange={handleVideo} />
              <span className="material-icons rte-icons1">videocam </span>
            </label>
            <label>
              <input type="file" accept="image/*" onChange={handleImage} />

              <span className="material-icons rte-icons1">image </span>
            </label>
          </div>

          <div class="reference">
            <div class="reference-content">
              {image && (
                <img
                  class="reference-thumb"
                  src={image}
                  alt="uploaded-by-user"
                  value={image}
                />
              )}
              {video && (
                <video
                  class="reference-video"
                  src={video}
                  controls
                  value={video}
                />
              )}
            </div>
            <input type="submit" value="Update" />{" "}
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPostForm;
