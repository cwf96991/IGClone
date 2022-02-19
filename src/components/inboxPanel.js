import { UserContext } from "./UserContext";
import { useContext } from "react";
import { NewMsgSvg, ArrowDownSvg } from "./image";
import ModalWrapper from "./modal/modalWrapper";
import SwitchAccountWidget from "./switchAccountWidget";
import { AvatarUsernameActionRow } from "./post/postWidget";
import NewInboxModal from "./modal/newInboxModal";
const InboxPanel = ({ chatroomList }) => {
  const user = useContext(UserContext).userContext.user;

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
              <div className="ml-2 ">
                <ArrowDownSvg />
              </div>
            </div>
          )}
        </ModalWrapper>
        <NewInboxModal id={"newInboxModal"} suggestList={chatroomList}>
          <NewMsgSvg />
        </NewInboxModal>
      </div>
      <div className="lightGrayDivider"></div>
      <div className="py-2 overflow-y-scroll max-h-fullScreen grow overflow-x-hidden">
        {chatroomList.map((user, index) => {
          return (
            <div key={index} className="hover:bg-[#fafafa]">
              <div className="mx-[20px] my-[8px] cursor-pointer ">
                <AvatarUsernameActionRow
                  user={user}
                  size={"56"}
                  isTruncateName={true}
                  textLimit={20}
                  isHide={true}
                  isfollow={true}
                  descWidget={
                    <div className="text-gray-300 text-xs font-bold">{`${
                      user.isTag
                        ? "Mentioned you in their story "
                        : `Active ${
                            user.lastActiveTime == 0
                              ? " now"
                              : `${user.lastActiveTime}h ago`
                          }`
                    }`}</div>
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InboxPanel;
