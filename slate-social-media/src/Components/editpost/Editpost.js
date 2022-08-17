import Emoji from "../emoji/Emoji";
import {
  React,
  useDispatch,
  useEffect,
  useNavigate,
  useSelector,
} from "../../Utils/SystemUtils";
import { getUserDetailsFn } from "../../redux/reducers/usersSlice";
function Editpost({
  setEditorText,
  handleImage,
  submitForm,
  editorText,
  isEdit,
  updateEditedPostFn,
}) {
  const navigate = useNavigate();

  function postEditedFn() {
    updateEditedPostFn();
    setEditorText("");
    navigate("/explore");
  }
  const loginData = useSelector((state) => state.auth.loginData);
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const _id = loginData?._id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetailsFn(_id));
  }, [_id, dispatch]);

  const { avatar } = getUserDetails;

  return (
    <div className="w-full">
      <div>
        <div class="px-4 py-4 flex items-center">
          <img src={avatar} class="rounded-full w-12" alt="" srcset="" />
          <div class="form-field px-4 w-full ">
            <textarea
              type="text"
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
              placeholder="What's happening?"
              class=" w-full resize-none py-2 text-gray-700 px-2 appearance-none focus:outline-none rounded-full"
            ></textarea>
          </div>
        </div>
        <div class="content-tools flex justify-center items-center w-auto h-2 ">
          <div class="tools px-10 flex">
            <label>
              <input
                type="file"
                accept="image/*"
                className="invisible  "
                onChange={handleImage}
              />
              <span className="material-icons  cursor-pointer text-sm h-5 w-5 text-center text-gray-600 rounded-full hover:bg-blue-400">
                image
              </span>
            </label>

            <span class="material-icons text-sky-500 text-sm mt-1 ml-2">
              <label>
                <Emoji setEditorText={setEditorText} />
              </label>
            </span>
          </div>
          <div class="tweet-btn p-2">
            <label>
              {isEdit ? (
                <span
                  class="text-xs cursor-pointer inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded-full"
                  onClick={postEditedFn}
                >
                  {" "}
                  update
                </span>
              ) : (
                <span
                  onClick={submitForm}
                  title="add post"
                  class="text-xs cursor-pointer inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full"
                >
                  {" "}
                  tweak
                </span>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editpost;
