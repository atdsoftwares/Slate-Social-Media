import "./editpost.css";
import Emoji from "../emoji/Emoji";
import { React, useNavigate } from "../../Utils/SystemUtils";
function Editpost({
  setEditorText,
  handleImage,
  handleVideo,
  handlePdf,
  submitForm,
  editorText,
  isEdit,
  updateEditedPostFn,
  pdf,
}) {
  const navigate = useNavigate();

  function postEditedFn() {
    updateEditedPostFn();
    setEditorText("");
    navigate("/explore");
  }
  return (
    <div className="compose-post-editor1">
      <div class="feed1">
        <div class="feed__inputContainer1">
          <form>
            <div className="mesg-editor-send1">
              <textarea
                name="message"
                placeholder="Type something..."
                value={editorText}
                onChange={(e) => setEditorText(e.target.value)}
                class="feed__input1"
              ></textarea>
              <div className="send-edit-post-btn1">
                {isEdit ? (
                  <span class="material-icons" onClick={postEditedFn}>
                    update
                  </span>
                ) : (
                  <span onClick={submitForm} class="material-icons">
                    send
                  </span>
                )}
              </div>
            </div>

            <div class="inputOption1">
              <label>
                <input type="file" accept="image/*" onChange={handleImage} />
                <span className="material-icons">image</span>
              </label>

              <label>
                <input type="file" accept="video/*" onChange={handleVideo} />
                <span className="material-icons">videocam </span>
              </label>
              <label>
                <input
                  name="userfile"
                  type="file"
                  accept="application/pdf"
                  onChange={handlePdf}
                />
                <span className="material-icons">picture_as_pdf</span>
              </label>
              <label>
                <Emoji setEditorText={setEditorText} />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editpost;
