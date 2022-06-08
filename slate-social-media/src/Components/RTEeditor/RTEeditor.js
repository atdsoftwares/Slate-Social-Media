import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";
import quillEmoji from "react-quill-emoji";
import "react-quill-emoji/dist/quill-emoji.css";
import "./RTEeditor.css";
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
  Quill.register("modules/imageResize", ImageResize);
  Quill.register(
    {
      "formats/emoji": quillEmoji.EmojiBlot,
      "modules/emoji-toolbar": quillEmoji.ToolbarEmoji,
      "modules/emoji-textarea": quillEmoji.TextAreaEmoji,
      "modules/emoji-shortname": quillEmoji.ShortNameEmoji,
    },
    true
  );

  const [value, setValue] = useState("");
  console.log("🚀 ~ file: RTEeditor.js ~ line 38 ~ RTEeditor ~ value", value);

  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      value={value}
      onChange={setValue}
    />
  );
}

export default RTEeditor;
