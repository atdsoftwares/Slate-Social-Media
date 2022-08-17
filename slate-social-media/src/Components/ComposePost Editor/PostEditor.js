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

  const _id = loginData?._id;

  useEffect(() => {
    getUserDetailsFn(_id);
  }, []);

  const { avatar, username, fullName } = getUserDetails;

  function handleImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
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
          {image && (
            <div>
              <img alt="not found" className="w-28 m-2 h-auto" src={image} />
            </div>
          )}
        </div>
      </div>
      <hr className="w-full" />
    </div>
  );
}

export default Posteditor;
