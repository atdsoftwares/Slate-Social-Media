import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";
import quillEmoji from "react-quill-emoji";
import "react-quill-emoji/dist/quill-emoji.css";
import "./RTEeditor.css";
import { useComposePostContext } from "../Context/PostContext";
const modules = {
  toolbar: {
    container: [
      ["bold", "italic"],
      ["emoji"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  },
  "emoji-toolbar": true,
  // "emoji-textarea": true,
  "emoji-shortname": true,
};

function RTEeditor() {
  const { editorText, postDispatch } = useComposePostContext();

  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      value={editorText}
      onChange={(event) =>
        postDispatch({
          type: "EDITOR_TEXT",
          payload: event,
        })
      }
    />
  );
}

export default RTEeditor;
