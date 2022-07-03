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
    <div>
      <div class="wrapper">
        <div class="input-box">
          <div class="tweet-area">
            <textarea
              class="input readonly input-box"
              value={editorText}
              spellcheck="false"
              placeholder="whats happening?"
              onChange={(e) => setEditorText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div class="bottom">
          <label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              // value={image}
            />
            <span className="material-icons rte-icons1">image</span>
          </label>
          <label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideo}
              // value={video}
            />
            <span className="material-icons rte-icons1">videocam </span>
          </label>
          <label>
            <input
              name="userfile"
              type="file"
              accept="application/pdf"
              onChange={handlePdf}
            />
            <span className="material-icons rte-icons1">picture_as_pdf</span>
          </label>
          <label>
            <span
              className="material-icons"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "2rem",
                marginTop: "-0.8rem",
              }}
            >
              {" "}
              <Emoji setEditorText={setEditorText} />
            </span>
            <div>{/*  */}</div>
          </label>

          <div class="content">
            {isEdit ? (
              <button class="btn" onClick={updateEditedPostFn}>
                Update
              </button>
            ) : (
              <button onClick={submitForm}>Post</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editpost;
