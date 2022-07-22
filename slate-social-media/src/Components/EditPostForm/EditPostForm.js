import {
  React,
  useEffect,
  useState,
  useNavigate,
  useDispatch,
  useSelector,
} from "../../Utils/SystemUtils";
import { updatePostFn } from "../../redux/reducers/postsSlice";
import Editpost from "../editpost/Editpost";
import "./EditPostForm.css";

function EditPostForm() {
  const [image, setImage] = useState();
  const [video, setVideo] = useState();
  const [pdf, setPdf] = useState();
  const [editorText, setEditorText] = useState();
  const [_id, setId] = useState();
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const { username, avatar, fullName } = getUserDetails;
  const post = {
    _id,
    content: editorText,
    image: image ? image : null,
    video: video ? video : null,
    pdf: pdf ? pdf : null,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setImage(localStorage.getItem("image"));
    setVideo(localStorage.getItem("video"));
    setPdf(localStorage.getItem("pdf"));
    setEditorText(localStorage.getItem("content"));
  }, []);
  const [isEdit, setIsEdit] = useState(true);
  const pdfPath = pdf ? pdf : null;
  function handleVideo(e) {
    console.log(`video handles`);
    setVideo(URL.createObjectURL(e.target.files[0]));
  }
  function handlePdf(e) {
    console.log(`pdf handles`);
    setPdf(URL.createObjectURL(e.target.files[0]));
  }
  function handleImage(e) {
    console.log(`image handles`);
    setImage(URL.createObjectURL(e.target.files[0]));
  }
  function removeImage() {
    setImage(delete post.image);
  }
  function removePdf() {
    setPdf(delete post.pdf);
  }

  function removeVideo() {
    setVideo(delete post.video);
  }
  const navigate = useNavigate();
  function updateEditedPostFn() {
    dispatch(updatePostFn({ _id, post }));
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
        </div>

        <form onClick={updateEditedPostFn}>
          <Editpost
            editorText={editorText}
            setEditorText={setEditorText}
            isEdit={isEdit}
            updateEditedPostFn={updateEditedPostFn}
            handleImage={handleImage}
            handleVideo={handleVideo}
            handlePdf={handlePdf}
          />

          <div class="reference">
            <div class="reference-content">
              {pdf && (
                <div>
                  <span
                    class="material-icons"
                    onClick={removePdf}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    X
                  </span>

                  <embed
                    alt="not found"
                    className="preview-pdf"
                    src={pdfPath}
                  />
                </div>
              )}
              <hr />
              {image && (
                <div>
                  <span
                    onClick={removeImage}
                    class="material-icons"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    X
                  </span>
                  <img alt="not found" className="preview-image" src={image} />
                </div>
              )}
              <hr />

              {video && (
                <div>
                  <span
                    className="material-icons"
                    onClick={removeVideo}
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    X
                  </span>
                  <video
                    className="preview-video"
                    controls
                    src={video}
                    type="video/mp4"
                  ></video>
                </div>
              )}

              <hr />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPostForm;
