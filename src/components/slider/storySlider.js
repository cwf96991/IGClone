import { useState, useEffect, useRef } from "react";
import { getRandomUserList } from "../../utils/random";
import Slider from "./slider";
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
      <Slider style="border px-[9px] border-gray-100 " >
        {userList.map((user, key) => {
          const { avatar, isNFT } = user;
          let style = isNFT ? "mask mask-hexagon" : "";
          return (
            <div className="avatar carousel-item mx-[9px] my-3" key={key}>
              <div className="rounded-full  p-[2px] bg-gradient-to-tr from-amber-500 to-fuchsia-700 ">
                <div className="p-[2px] bg-white rounded-full">
                  <img
                    src={avatar}
                    className={`rounded-full !w-[56px] !h-[56px] ${style}`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default StorySlider;
