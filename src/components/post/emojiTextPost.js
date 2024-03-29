import React, { useState, useEffect } from "react";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
const EmojiTextPost = ({
  callback,
  setText,
  text,
  centerWidget,
  trailingWidget,
  size,
  color,
  emojiHandler,
}) => {
  color = color ?? "fill-black";
  const [showEmojis, setShowEmojis] = useState(false);
  useEffect(() => {
    function checkClickOutside(event) {
      const element = event.target;

      if (
        element.classList.contains("react-input-emoji--button") ||
        element.classList.contains("react-input-emoji--button--icon")
      ) {
        return;
      }
      if (emojiHandler) {
        emojiHandler(false);
      }

      setShowEmojis(false);
    }

    document.addEventListener("click", checkClickOutside);
    return () => {
      document.removeEventListener("click", checkClickOutside);
    };
  }, []);
  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setText(text + emoji);
  };
  return (
    <div className=" mx-4 my-3 justify-between items-center hidden md:flex">
      <div className="flex items-center grow relative">
        {showEmojis && (
          <div className="z-30 absolute bottom-0 -translate-y-[24px]">
            <Picker onSelect={addEmoji} />
          </div>
        )}
        <div
          onClick={() => {
            setShowEmojis(!showEmojis);
            if (emojiHandler) {
              emojiHandler(!showEmojis);
            }
          }}
          className="btnText react-input-emoji--button--icon relative"
        >
          <svg
            aria-label="Emoji"
            className={`${color} group hover:fill-gray-300 react-input-emoji--button--icon`}
            height={size ?? "24"}
            role="img"
            viewBox="0 0 24 24"
            width={size ?? "24"}
          >
            <path
              className="react-input-emoji--button--icon"
              d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"
            ></path>
          </svg>
        </div>
        {centerWidget ?? (
          <input
            type="text"
            value={text}
            className="grow text-black  focus:outline-none  placeholder-gray-300 ml-4 font-semibold text-sm"
            placeholder="Add a comment..."
            onChange={(e) => setText(e.target.value)}
          />
        )}
      </div>
      {trailingWidget ?? (
        <div
          onClick={() => {
            if (text.length != 0) {
              callback(text);
              setText("");
            }
          }}
          className={`btnText font-bold text-sm !text-lightBlue ${
            text.length != 0 ? "" : "opacity-30"
          }`}
        >
          Post
        </div>
      )}
    </div>
  );
};

export default EmojiTextPost;
