import { faker } from "@faker-js/faker";
import { useState, useEffect, useRef } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Avatar from "./avatar";
const StorySlider = () => {
  const storyRef = useRef(null);
  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [hideRightArrow, setHideRightArrow] = useState(false);
  function callBack() {
    setHideLeftArrow(storyRef.current.scrollLeft == 0);
    setHideRightArrow(
      storyRef.current.scrollLeft ==
        storyRef.current.scrollWidth - storyRef.current.clientWidth
    );
  }
  useEffect(() => {
    if (storyRef.current) {
      storyRef.current.addEventListener("scroll", callBack);
    }
    return () => {
      if (storyRef.current) {
        storyRef.current.removeEventListener("scroll", callBack);
      }
    };
  }, [storyRef]);
  return (
    <div className=" mt-8 relative ">
      <div
        ref={storyRef}
        className="border scroll-smooth  border-[#dbdbdb] flex  overflow-x-scroll noScrollBar "
      >
        {[...Array(20)].map((item, key) => {
          return (
            <div class="avatar carousel-item ml-[18px] my-3" key={key}>
              <div class="rounded-full  p-[2px] bg-gradient-to-tr from-amber-500 to-fuchsia-700 ">
                <div className="p-[2px] bg-white rounded-full">
                  <img
                    src={faker.image.avatar()}
                    className="rounded-full !w-[56px] !h-[56px]"
                  />
                </div>
              </div>
            </div>
          );
        })}
        {!hideLeftArrow && (
          <button
            onClick={() => {
              storyRef.current.scrollLeft -= storyRef.current.offsetWidth;
            }}
            className="absolute left-2 text-white  top-1/2 -translate-y-1/2 bg-transparent border-transparent shadow-lg rounded-full p-0 m-0"
          >
            <ArrowCircleLeftIcon />
          </button>
        )}
        {!hideRightArrow && (
          <button
            onClick={() => {
              storyRef.current.scrollLeft += storyRef.current.offsetWidth;
            }}
            className="absolute right-2 text-white  top-1/2 -translate-y-1/2 bg-transparent border-transparent shadow-lg rounded-full p-0 m-0"
          >
            <ArrowCircleRightIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default StorySlider;
