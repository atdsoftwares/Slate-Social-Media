import React, { useState } from "react";
import Picker from "emoji-picker-react";
import "./Emoji.css";
function Emoji({ setEditorText }) {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setEditorText((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <div className="app">
      <div className="picker-container">
        <span
          className="material-icons input-style1"
          onClick={() => setShowPicker((val) => !val)}
        >
          {" "}
          add_reaction
        </span>

        {showPicker && (
          <Picker
            pickerStyle={{ width: "100%" }}
            onEmojiClick={onEmojiClick}
            className="picker"
          />
        )}
      </div>
    </div>
  );
}

export default Emoji;
