import { useState, useEffect, useRef } from "react";
import { getRandomUserList } from "../../utils/random";
import Slider from "./slider";
import {truncateName} from "../../utils/function"
const StorySlider = () => {
  const [userList, setUserList] = useState([]);

  function fetchData() {
    setUserList(getRandomUserList());
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" mt-8 relative ">
      <Slider style="border px-[9px] border-gray-100 ">
        {userList.map((user, key) => {
          const { avatar, username, isNFT } = user;
          let style = isNFT ? "mask mask-hexagon" : "";
          return (
            <div className="flex  flex-col my-3 mx-[9px] items-center">
              <div className="avatar carousel-item mt-[8px] " key={key}>
                <div className="rounded-full  p-[2px] bg-gradient-to-tr from-amber-500 to-fuchsia-700 ">
                  <div className="p-[2px] bg-white rounded-full">
                    <img
                      src={avatar}
                      className={`rounded-full !w-[56px] !h-[56px] ${style} `}
                    />
                  </div>
                </div>
              </div>
              <div className="text-sm">{truncateName(username)}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default StorySlider;
