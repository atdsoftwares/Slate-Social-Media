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
// import "./EditPostForm.css";

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
    setVideo(null);
  }
  const navigate = useNavigate();
  function updateEditedPostFn() {
    dispatch(updatePostFn({ _id, post }));
    // navigate("/explore");
  }

  return (
    <div>
      <div class="flex flex-col w-full ">
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
          <div class="flex justify-center items-center p-2">
            {pdf && (
              <div>
                <span
                  onClick={removePdf}
                  class="material-icons cursor-pointer text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full"
                >
                  close
                </span>
                <embed
                  alt="not found pdf"
                  className="w-32 mr-2 h-auto"
                  src={pdf}
                  disabled={true}
                />
              </div>
            )}

            {image && (
              <div>
                <span
                  onClick={removeImage}
                  class="material-icons cursor-pointer text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full"
                >
                  close
                </span>
                <img
                  alt="not found"
                  className="w-28 mr-2  h-auto"
                  src={image}
                />
              </div>
            )}

            {video && (
              <div>
                <span
                  onClick={removeVideo}
                  class="material-icons cursor-pointer text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full"
                >
                  close
                </span>
                <video className="w-28 h-auto" controls>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            )}
          </div>
          <hr className="w-full" />

          {/* <div class="">
            <div class="flex ">
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
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default EditPostForm;
