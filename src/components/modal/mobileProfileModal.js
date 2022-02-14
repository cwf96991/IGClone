import Basic from "./basic";
import React, { useState, useEffect, useRef } from "react";
import Draggable from "npm install react-draggable";
const MobileProfileModal = () => {
  const btnList = [
    "View Profile",
    "Turn on Post Notifications",
    "Send as Message",
  ];
  const modal1Ref = useRef(null);
  const modal2Ref = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    console.log(offsetY)
    // modal1Ref.current.style.transform = scale(${result});
    // if (offsetY > 80) {
    //   let result = offsetY >= 280 ? 0 : 1 - (offsetY - 80) / 200;
    //   console.log(result);
    //   modal1Ref.current.style.transform = scale(${result});
    // }
  }, [offsetY]);
  const handleDrag = (e, data) => {
    setOffsetY(data.y);
  };
  const handleDragEnd = (e, data) => {
    // console.log("data", data.y);
  };

  return (
    <Draggable
              onDrag={handleDrag}
              axis="y"
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              scale={1}
              onStop={handleDragEnd}
              id="my-modal-2"
            >
              <div className="w-screen h-screen  handle ">
                <div className="!fixed  top-0 mt-[24px] flex flex-col w-full">
                  <div
                    ref={modal1Ref}
                    className="modal-box  rounded-lg bg-black opacity-40 mb-4 "
                  >
                    <div className="text-white font-bold opacity-100">
                      View Profile
                    </div>
                  </div>
                  <div
                    ref={modal2Ref}
                    className="modal-box rounded-lg bg-black opacity-40 p-0 py-[8px] shrink w-[60%] mx-[12px]"
                  >
                    {btnList.map((btn, index) => {
                      return (
                        <div className="flex flex-col">
                          <div className="text-white font-semibold opacity-100 px-[24px] my-[4px]">
                            {btn}
                          </div>
                          {index != btnList.length - 1 && (
                            <div className="lightGrayDivider-sm"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Draggable>
  );
};

export default MobileProfileModal;