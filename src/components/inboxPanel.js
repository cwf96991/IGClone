import { UserContext } from "./UserContext";
import { useState, useEffect, useContext } from "react";
import { NewMsgSvg, ArrowDownSvg } from "./image";
import { getRandomUser } from "../utils/random";
import ModalWrapper from "./modal/modalWrapper";
import SwitchAccountWidget from "./switchAccountWidget";
import { AvatarUsernameActionRow } from "./post/postWidget";

const InboxPanel = () => {
  const user = useContext(UserContext).userContext.user;
  const [chatroomList, setChatroomList] = useState([]);
  useEffect(() => {
    let list = [];
    for (let index = 0; index < 20; index++) {
      let user = getRandomUser();
      list.push(user);
    }
    setChatroomList(list);
  }, []);
  function closeModal() {
    const modal = document.getElementById("inboxSwitchModal");
    modal.checked = false;
  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center my-[12px] mx-[20px]">
        <div></div>

        <ModalWrapper
          id={"inboxSwitchModal"}
          content={
            <SwitchAccountWidget
              closeModal={() => {
                closeModal();
              }}
            />
          }
        >
          {user && (
            <div className="btnText !text-16 ">
              {user.username}
              <div className="ml-2">
                <ArrowDownSvg />
              </div>
            </div>
          )}
        </ModalWrapper>
        <NewMsgSvg />
      </div>
      <div className="lightGrayDivider"></div>
      <div className="py-2 overflow-y-scroll max-h-fullScreen grow overflow-x-hidden">
        {chatroomList.map((user, index) => {
          return (
            <div key={index} className="mx-[20px] my-[8px]">
              <AvatarUsernameActionRow
                user={user}
                size={"56"}
                isTruncateName={true}
                textLimit={20}
                isHide={true}
                isfollow={true}
                descWidget={
                  <div className="text-gray-300 text-xs font-bold">{`${
                    user.isTag ? "active" : "tag"
                  }`}</div>
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InboxPanel;
