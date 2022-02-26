import { useState, useEffect } from "react";
import { getRandomUserList } from "../../utils/random";
import Slider from "./slider";
import { truncateName } from "../../utils/function";
import ImageWidget from "../imageWidget";

const StorySliderPlaceholder = () => {
  return (
    <div className=" px-[9px] border-black md:border-gray-100  border-t-0 md:border-[0.5px] bg-black md:bg-white flex animate-pulse">
      {[...Array(6)].map((user, key) => {
        let circleStyle = "bg-gradient-to-tr from-amber-500 to-fuchsia-700";
        return (
          <div
            key={key}
            className="flex  flex-col my-3 mx-[9px] items-center cursor-pointer"
          >
            <div className="avatar carousel-item mt-[8px] " key={key}>
              <div className={`rounded-full  p-[2px] ${circleStyle} `}>
                <div className="p-[2px] bg-white rounded-full">
                  <div className="rounded-full bg-slate-200 h-[56px] w-[56px]"></div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-slate-200 h-[21px] w-[80px] mt-2"></div>
          </div>
        );
      })}
    </div>
  );
};
const StorySlider = ({ style, storySize, isMarginT }) => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  isMarginT = isMarginT ?? true;
  let marginT = isMarginT ? "md:mt-8" : "";
  style =
    style ??
    "border-black md:border-gray-100  border-t-0 md:border-[0.5px] bg-black md:bg-white";
  function fetchData() {
    setUserList(getRandomUserList());
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const StoryItem = ({ user, size }) => {
    const { avatar, username, isNFT, isClosedFD } = user;

    size = size ?? "!w-[56px] !h-[56px]";
    let style = isNFT ? "mask mask-hexagon" : "";
    let circleStyle = isClosedFD
      ? " bg-green-500"
      : "bg-gradient-to-tr from-amber-500 to-fuchsia-700";
    return (
      <div className="flex  flex-col my-3 mx-[9px] items-center cursor-pointer">
        <div className="avatar carousel-item mt-[8px] ">
          <div className={`rounded-full  p-[2px] ${circleStyle} `}>
            <div className="p-[2px] bg-white rounded-full">
              <ImageWidget
                img={avatar}
                style={`rounded-full ${size} ${style} `}
                placeholder={
                  <div
                    className={`rounded-full bg-slate-200 ${size} animate-pulse ${style}`}
                  ></div>
                }
              />
            </div>
          </div>
        </div>
        <div className="text-sm text-white md:text-black">
          {truncateName(username, 15)}
        </div>
      </div>
    );
  };
  return (
    <div className={`${marginT}  relative`}>
      {isLoading ? (
        <StorySliderPlaceholder />
      ) : (
        <Slider style={`px-[9px] ${style}`}>
          {userList.map((user, key) => {
            return <StoryItem user={user} key={key} size={storySize} />;
          })}
        </Slider>
      )}
    </div>
  );
};

export default StorySlider;
