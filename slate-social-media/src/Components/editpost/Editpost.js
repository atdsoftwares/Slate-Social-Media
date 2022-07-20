import React, { useState } from "react";
import "./editpost.css";
import Emoji from "../emoji/Emoji";
import { updatePostFn } from "../../redux/reducers/postsSlice";
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
  return (
    <div className="compose-post-editor">
      <form class="bg-white shadow rounded-lg mb-6 p-4 compose-post-editor">
        <textarea
          name="message"
          placeholder="Type something..."
          value={editorText}
          onChange={(e) => setEditorText(e.target.value)}
          class="w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
        ></textarea>
        <footer class="flex justify-between m-2">
          <div class="flex gap-2">
            <span class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-9 h-9 pt-1 pr-1 pb-6 pl-2 rounded-full text-blue-400 cursor-pointer">
              <label>
                <input type="file" accept="image/*" onChange={handleImage} />
                <span className="material-icons editor-icon">image</span>
              </label>
            </span>
            <span class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-9 h-9 pt-1 pr-1 pb-6 pl-2 rounded-full text-blue-400 cursor-pointer">
              <label>
                <input type="file" accept="video/*" onChange={handleVideo} />
                <span className="material-icons editor-icon">videocam </span>
              </label>
            </span>
            <span class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-9 h-9 pt-1 pr-1 pb-6 pl-2 rounded-full text-blue-400 cursor-pointer">
              <label>
                <input
                  name="userfile"
                  type="file"
                  accept="application/pdf"
                  onChange={handlePdf}
                />
                <span className="material-icons editor-icon">
                  picture_as_pdf
                </span>
              </label>
            </span>
            <span class="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-9 h-9 pt-1 pr-1 pb-6 pl-2 rounded-full text-blue-400 cursor-pointer">
              <Emoji setEditorText={setEditorText} />
            </span>
          </div>
          {isEdit ? (
            <button
              class="flex items-center py-2 px-4 rounded-lg text-sm bg-gray-300 text-white shadow-lg"
              onClick={updateEditedPostFn}
            >
              Update
            </button>
          ) : (
            <button
              onClick={submitForm}
              class="flex items-center py-2 px-4 rounded-lg text-sm bg-green-600 text-white shadow-lg"
            >
              Post
            </button>
          )}
        </footer>
      </form>
    </div>
  );
}

export default Editpost;
