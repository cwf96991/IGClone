import { MsgSvg } from "../image";
import NewInboxModal from "../modal/newInboxModal";
const ChatRoomMain = ({ chatroomList }) => {
  return (
    <div className="flex flex-col justify-center h-full items-center ">
      <div className="w-[96px] h-[96px] rounded-full border-2 border-black pt-3">
        <MsgSvg size={"58"} isIgnore={true} />
      </div>
      <div className="text-22 mt-2">Your messages</div>
      <div className="text-sm text-gray-300">
        Send private photos and messages to a friend or group.
      </div>
      <NewInboxModal id={"sendMsgBtnModal"} suggestList={chatroomList}>
        <div
          className={`btnText !py-[5px] !px-[9px] font-bold !bg-lightBlue !text-white !text-sm !mt-6`}
        >
          Send message
        </div>
      </NewInboxModal>
    </div>
  );
};

export default ChatRoomMain;
