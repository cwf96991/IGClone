import { useState, useEffect, useRef } from "react";
import { LeftArrow, RightArrow } from "../image";
const Slider = (props) => {
  let style = props.style ?? "";
  let ref = props.ref ?? useRef(null);
  let isPagination = props.isPagination ?? false;
  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [hideRightArrow, setHideRightArrow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  function callBack() {
    setHideLeftArrow(ref.current.scrollLeft == 0);
    setHideRightArrow(
      ref.current.scrollLeft ==
        ref.current.scrollWidth - ref.current.clientWidth
    );
    setCurrentIndex(Math.round(ref.current.scrollLeft / ref.current.scrollWidth*props.children.length))
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
      className={`${style}  flex scroll-smooth overflow-x-scroll noScrollBar `}
    >
      {props.children}
      {!hideLeftArrow && (
        <button
          onClick={() => {
            ref.current.scrollLeft -= ref.current.offsetWidth;
          }}
          className="absolute left-2 text-white  top-1/2 -translate-y-1/2 bg-transparent border-transparent drop-shadow-2xl rounded-full p-0 m-0 w-[24px] h-[24px]"
        >
          <LeftArrow />
        </button>
      )}
      {!hideRightArrow && (
        <button
          onClick={() => {
            ref.current.scrollLeft += ref.current.offsetWidth;
          }}
          className="absolute right-2 text-white  top-1/2 -translate-y-1/2 bg-transparent border-transparent drop-shadow-2xl rounded-full p-0 m-0 w-[24px] h-[24px]"
        >
          <RightArrow />
        </button>
      )}
      {isPagination && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex translate-y-[20px]">
          {[...Array(props.children.length)].map((item, index) => {
            let isSelected = currentIndex == index;
            return (
              <div
                key={index}
                className={`${
                  isSelected ? "bg-lightBlue" : "bg-gray-300"
                } h-[6px] w-[6px] mx-[1px] rounded-full`}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Slider;
