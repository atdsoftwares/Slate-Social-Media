import React, { useEffect, useState } from "react";
// import { useComposePostContext } from "../Context/PostContext";
import { v4 as uuid } from "uuid";
// import RTEeditor from "../RTEeditor/RTEeditor";
// import { composeNewPostFn } from "../Services/Post/Postservices";
import "./Posteditor.css";

// import { getUserDetailsFn } from "../Services/User/Userservices";

import { composeNewPostFn } from "../../redux/reducers/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailsFn } from "../../redux/reducers/usersSlice";
import Editpost from "../editpost/Editpost";
function Posteditor() {
  const loginData = useSelector((state) => state.auth.loginData);
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const [image, setImage] = useState();
  const [video, setVideo] = useState();
  const [pdf, setPdf] = useState();
  const [editorText, setEditorText] = useState("");
  console.log(
    "🚀 ~ file: PostEditor.js ~ line 22 ~ Posteditor ~ editorText",
    editorText
  );
  const dispatch = useDispatch();

  // const { loginData } = useLoginSignupContext();
  const _id = loginData._id;

  useEffect(() => {
    dispatch(getUserDetailsFn(_id));
  }, []);

  const { avatar, username, fullName } = getUserDetails;

  function handleImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }
  function handlePdf(e) {
    setPdf(URL.createObjectURL(e.target.files[0]));
  }

  function handleVideo(e) {
    setVideo(URL.createObjectURL(e.target.files[0]));
  }

  const post = {
    _id: uuid(),
    content: editorText,
    image: image ? image : null,
    video: video ? video : null,
    pdf: pdf ? pdf : null,
    username: username,
    avatar: avatar,
    fullName: fullName,
  };

  function submitForm(e) {
    e.preventDefault();
    setEditorText(null);
    dispatch(composeNewPostFn(post));
    setImage(null);
    setVideo(null);
    setPdf(null);
    setEditorText("");
  }

  return (
    <div>
      <form>
        <div className="rte-editor">
          <div className="avatar-editor">
            <div>
              <img src={avatar} alt="avatar" className="avatar-img" />
              <div> @{username}</div>
            </div>

            <Editpost
              setEditorText={setEditorText}
              handleImage={handleImage}
              handleVideo={handleVideo}
              handlePdf={handlePdf}
              submitForm={submitForm}
              editorText={editorText}
            />
          </div>
        </div>
      </form>
      <div className="media-preview">
        <h3 className="preview-text"> preview your data</h3>
        {pdf && (
          <div>
            <embed alt="not found pdf" className="preview-pdf" src={pdf} />
          </div>
        )}

        {image && (
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
