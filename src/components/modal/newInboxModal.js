import ModalWrapper from "./modalWrapper";
import { CrossSvg, BlueTickSvg } from "../image";
import { useRef, useState, useReducer } from "react";
import { enableBodyScroll } from "body-scroll-lock";
import { AvatarUsernameActionRow } from "../post/postWidget";

const NewInboxModal = ({ children, id, suggestList }) => {
  const forceUpdate = useReducer(() => ({}))[1];

  const modalRef = useRef(null);
  const searchRef = useRef(null);
  const suggestRef = useRef(null);
  const [selectedList, setSelectedList] = useState([]);
  function adjHeight() {
    let selectSessionHeight = 46 + selectedList.length * 43;
    let headBar = 42;
    let height = 520 - headBar - selectSessionHeight;
    suggestRef.current.style.height = height + "px";
    searchRef.current.focus();
  }

  return (
    <ModalWrapper
      id={id}
      height={"h-[520px]"}
      modalRef={modalRef}
      content={
        <div className="flex flex-col">
          <div className="flex justify-between items-center mx-4 h-[42px] py-auto">
            <div
              className={"cursor-pointer"}
              onClick={() => {
                const modal = document.getElementById(id);

                modal.checked = false;
                enableBodyScroll(modalRef.current);
              }}
            >
              <CrossSvg size={"18"} />
            </div>
            <div className="text-16 font-bold ">New Message</div>
            <div
              className={`text-sm font-bold btnText !text-lightBlue cursor-pointer  ${
                selectedList.length > 0 ? "" : "opacity-50"
              }`}
            >
              Next
            </div>
          </div>
          <div className="lightGrayDivider"></div>
          <div className="flex  items-start">
            <div className="text-16 font-bold mx-3 mt-2">To:</div>
            <div className="flex flex-col flex-wrap shrink">
              {selectedList.map((username, index) => {
                return (
                  <div
                    onClick={() => {
                      let newSelectList = selectedList;
                      if (newSelectList.includes(username)) {
                        newSelectList.pop(username);
                      }

                      setSelectedList(newSelectList);

                      forceUpdate();
                      adjHeight();
                    }}
                    key={index}
                    className="flex items-center bg-[#e0f1ff] rounded-md  h-[35px] m-1 px-3 shrink"
                  >
                    <div className="text-lightBlue mr-2">{username}</div>
                    <CrossSvg size={"12"} color="stroke-lightBlue" />
                  </div>
                );
              })}
              <input
                ref={searchRef}
                type="text"
                className="  h-[30px] w-[289px] text-black my-2 py-1 px-3"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="lightGrayDivider"></div>

          <div
            ref={suggestRef}
            className="overflow-y-scroll grow overflow-x-hidden h-[430px]"
          >
            <div className="mx-3 text-sm font-bold my-5">Suggested</div>
            {suggestList.map((user, index) => {
              return (
                <div
                  onClick={() => {
                    let newSelectList = selectedList;
                    if (newSelectList.includes(user.username)) {
                      newSelectList.pop(user.username);
                    } else {
                      newSelectList.push(user.username);
                    }

                    setSelectedList(newSelectList);

                    forceUpdate();
                    adjHeight();
                  }}
                  key={index}
                  className="mx-[20px] my-[8px] hover:bg-[#fafafa]"
                >
                  <AvatarUsernameActionRow
                    user={user}
                    size={"56"}
                    isTruncateName={true}
                    textLimit={20}
                    isHide={true}
                    isfollow={true}
                    descWidget={
                      <div className="text-gray-300 text-xs font-bold">
                        {user.name}
                      </div>
                    }
                    actionBtn={
                      selectedList.includes(user.username) ? (
                        <BlueTickSvg />
                      ) : (
                        <div className="w-[24px] h-[24px] rounded-full border border-black"></div>
                      )
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      }
    >
      {children}
    </ModalWrapper>
  );
};

export default NewInboxModal;
