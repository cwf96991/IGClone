import React, { useState } from "react";
// import useMobile from "../hook/useMobile";
import NewlineText from "./newlineText";
const ReadMore = ({ children, textLimit }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
//   const isMobile = useMobile();
  textLimit = 70;
  return (
    <div className="inline">
      {<NewlineText text={isReadMore ? text.slice(0, textLimit) : text} />}
      {text.length > textLimit && (
        <span
          onClick={toggleReadMore}
          className={`read-or-hide text-yellow-500 cursor-pointer ${
            isReadMore ? "overflow-y-auto" : "overflow-y-scroll"
          }`}
        >
          {isReadMore ? " ...Read more" : "  Show less"}
        </span>
      )}
    </div>
  );
};

const ReadMoreText = ({ text, textLimit }) => {
  return (
    <div className="inline">
      <ReadMore textLimit={textLimit}>{text}</ReadMore>
    </div>
  );
};

export default ReadMoreText;
