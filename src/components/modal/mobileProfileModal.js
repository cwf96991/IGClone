import Basic from "./basic";
import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
const MobileProfileModal = () => {
  const btnList = [
    "View Profile",
    "Turn on Post Notifications",
    "Send as Message",
  ];
  const wholeModal = useRef(null);
  const modal1Ref = useRef(null);
  const modal2Ref = useRef(null);
  const [totalOffsetY, setTotalOffsetY] = useState(0);

  const [totalOffsetX, setTotalOffsetX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [startX, setStartX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    console.log(offsetY);
    if (offsetY < 0) {
      let temp = -offsetY / 100;
      console.log("temp", temp);
      // let result = Math.max(0.8, 0.9);
      // modal1Ref.current.style.transform = scale(${result});
    }
    // modal1Ref.current.style.transform = scale(${result});
    // if (offsetY > 80) {
    //   let result = offsetY >= 280 ? 0 : 1 - (offsetY - 80) / 200;
    //   console.log(result);
    //   modal1Ref.current.style.transform = scale(${result});
    // }
  }, [totalOffsetY]);
  const handleDragStart = (e, data) => {
    setStartY(data.y);
  };
  const handleDrag = (e, data) => {
    setTotalOffsetY(data.y);
    setTotalOffsetX(data.x);

    setOffsetY(data.y - startY);
    // console.log("e", e);
    // console.log("data", data);
    // console.log("result", e.offsetY - offsetY);
  };
  const handleDragEnd = (e, data) => {
    wholeModal.current.style.transform = translate(
      `-${totalOffsetX}px,-${totalOffsetY}px`
    );
    // console.log("data", data.y);
  };

  return (
    <Basic title={"member"} isMember={true}>
      <div className="my-20">
        <div>
          <label for="my-modal-2" className="btn btn-primary modal-button">
            open modal
          </label>
          <input type="checkbox" id="my-modal-2" className="modal-toggle" />
          <div className="modal bg-transparent !backdrop-blur">
            <Draggable
              onDrag={handleDrag}
              axis="both"
              handle=".handle"
              onStart={handleDragStart}
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              scale={1}
              onStop={handleDragEnd}
              id="my-modal-2"
            >
              <div className="w-screen h-screen  handle ">
                <div
                  ref={wholeModal}
                  className="!fixed  top-0 mt-[24px] flex flex-col w-full"
                >
                  <div
                    ref={modal1Ref}
                    onClick={() => {
                      const modal = document.getElementById("my-modal-2");
                      modal.checked = false;
                    }}
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
                            <div className="w-full h-[0.5px] bg-gray-100"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Draggable>
          </div>
        </div>
      </div>
    </Basic>
  );
};

export default MobileProfileModal;
