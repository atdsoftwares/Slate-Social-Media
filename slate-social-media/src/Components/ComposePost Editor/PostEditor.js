import {
  React,
  useEffect,
  useState,
  uuid,
  useDispatch,
  useSelector,
} from "../../Utils/SystemUtils";
// import "./Posteditor.css";
import { composeNewPostFn } from "../../redux/reducers/postsSlice";
import { getUserDetailsFn } from "../../redux/reducers/usersSlice";
import Editpost from "../editpost/Editpost";
function Posteditor() {
  const loginData = useSelector((state) => state.auth.loginData);
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const [image, setImage] = useState();
  const [video, setVideo] = useState();
  const [pdf, setPdf] = useState();
  const [editorText, setEditorText] = useState("");

  const dispatch = useDispatch();

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
    <div className="flex flex-col justify-center items-center ">
      <form>
        <div className="w-full">
          <Editpost
            setEditorText={setEditorText}
            handleImage={handleImage}
            handleVideo={handleVideo}
            handlePdf={handlePdf}
            submitForm={submitForm}
            editorText={editorText}
          />
        </div>
      </form>
      <div
        className="
        mt-2
      "
      >
        <h3 className="text-lg"> preview your data</h3>
        <div class="flex justify-center items-center p-2">
          {pdf && (
            <div>
              <embed alt="not found pdf" className="w-32 h-auto" src={pdf} />
            </div>
          )}

          {image && (
            <div>
              <img alt="not found" className="w-28 m-2 h-auto" src={image} />
            </div>
          )}

          {video && (
            <div>
              <video className="w-28 h-auto" controls>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          )}
        </div>
      </div>
      <hr className="w-full" />
    </div>
  );
}

export default Posteditor;
