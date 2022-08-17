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

function EditPostForm() {
  const [image, setImage] = useState();
  const [editorText, setEditorText] = useState();
  const [_id, setId] = useState();
  const getUserDetails = useSelector((state) => state.users.getUserDetails);

  const { username, avatar, fullName } = getUserDetails;
  const post = {
    _id,
    content: editorText,
    image: image ? image : null,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setImage(localStorage.getItem("image"));

    setEditorText(localStorage.getItem("content"));
  }, []);
  const [isEdit, setIsEdit] = useState(true);

  function handleImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }
  function removeImage() {
    setImage(delete post.image);
  }

  function updateEditedPostFn() {
    dispatch(updatePostFn({ _id, post }));
    // updatePostFn({ _id, post });
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
          />
          <div class="flex justify-center items-center p-2">
            {image && image ? (
              <div>
                <span
                  onClick={removeImage}
                  class="material-icons cursor-pointer text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full"
                >
                  close
                </span>
                <img className="w-28 mr-2  h-auto" src={image} alt="images" />
              </div>
            ) : null}
          </div>
          <hr className="w-full" />
        </form>
      </div>
    </div>
  );
}

export default EditPostForm;
