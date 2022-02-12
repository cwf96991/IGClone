import { useState, useEffect, useRef } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const Slider = (props) => {
  let style = props.style ?? "";
  let ref = props.ref ?? useRef(null);
  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [hideRightArrow, setHideRightArrow] = useState(false);
  function callBack() {
    setHideLeftArrow(ref.current.scrollLeft == 0);
    setHideRightArrow(
      ref.current.scrollLeft ==
        ref.current.scrollWidth - ref.current.clientWidth
    );
  }
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("scroll", callBack);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", callBack);
      }
    };
  }, [ref]);
  return (
    <div
      ref={ref}
      className={`${style} flex scroll-smooth overflow-x-scroll noScrollBar `}
    >
      {props.children}
      {!hideLeftArrow && (
        <button
          onClick={() => {
            ref.current.scrollLeft -= ref.current.offsetWidth;
          }}
          className="absolute left-2 text-white  top-1/2 -translate-y-1/2 bg-transparent border-transparent shadow-lg rounded-full p-0 m-0"
        >
          <ArrowCircleLeftIcon className="fa-sm" />
        </button>
      )}
      {!hideRightArrow && (
        <button
          onClick={() => {
            ref.current.scrollLeft += ref.current.offsetWidth;
          }}
          className="absolute right-2 text-white  top-1/2 -translate-y-1/2 bg-transparent border-transparent shadow-lg rounded-full p-0 m-0"
        >
          <ArrowCircleRightIcon className="fa-sm" />
        </button>
      )}
    </div>
  );
};
export default Slider;
