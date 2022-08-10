import { React, useState } from "../../Utils/SystemUtils";
import Picker from "emoji-picker-react";
// import "./Emoji.css";
function Emoji({ setEditorText }) {
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setEditorText((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <div className="app">
      <div className="picker-container">
        <span
          className="material-icons cursor-pointer text-sm h-5 w-5 text-center text-gray-600 rounded-full hover:bg-blue-400"
          onClick={() => setShowPicker((val) => !val)}
        >
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
