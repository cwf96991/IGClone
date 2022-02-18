import Base from "./base";
import InboxPanel from "../components/inboxPanel";
import ChatRoomMain from "../components/chatRoom/chatRoomMain";
const InboxMainPage = () => {
  return (
    <Base>
      <div className="flex py-3 h-fullScreen">
        <div className="w-[325px] ml-auto bg-white h-full border border-gray-100 rounded-l-sm border-r-0">
          <InboxPanel />
        </div>
        <div className="flex max-w-full md:w-[620px] mr-auto">
          <div className="max-w-full md:w-[620px]  bg-white h-full border border-gray-100 rounded-r-sm  ">
            <ChatRoomMain />
          </div>
        </div>
      </div>
    </Base>
  );
};
export default InboxMainPage;
