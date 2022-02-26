import { useState, useEffect } from "react";
import { getRandomUserList } from "../../utils/random";
import Slider from "./slider";
import { truncateName } from "../../utils/function";
import ImageWidget from "../imageWidget";

const UserSlider = ({ style, avatarSize }) => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    const { avatar, username, isNFT, isClosedFD, name } = user;

    size = size ?? "!w-[54px] !h-[54px]";
    let style = isNFT ? "mask mask-hexagon" : "";
    let circleStyle = isClosedFD
      ? " bg-green-500"
      : "bg-gradient-to-tr from-amber-500 to-fuchsia-700";
    return (
      <div className="md:border rounded-lg bgWhite p-5 my-1 mx-[9px] md:border-gray-100">
        <div className="flex flex-col  items-center cursor-pointer  !w-[134px] h-[156px] justify-around">
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
          <div className="flex flex-col items-center my-4">
            <div className="text-sm text-white md:text-black">
              {truncateName(username, 15)}
            </div>
            <div className="text-sm text-gray-300 md:text-black">
              {truncateName(name, 15)}
            </div>
          </div>
          <div className=" !bg-lightBlue !text-white !h-[30px] !border-[0.5px] !border-gray-100 btnText !rounded-md !px-2">
            Follow
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={` relative`}>
      <Slider style={`px-[9px]`}>
        {userList.map((user, key) => {
          return <StoryItem user={user} key={key} size={avatarSize} />;
        })}
      </Slider>
    </div>
  );
};

export default UserSlider;
