import Base from "./base";
import InboxPanel from "../components/inboxPanel";
import ChatRoomMain from "../components/chatRoom/chatRoomMain";
import { getRandomUser } from "../utils/random";
import { useState, useEffect } from "react";

const InboxMainPage = () => {
  const [chatroomList, setChatroomList] = useState([]);
  useEffect(() => {
    let list = [];
    for (let index = 0; index < 20; index++) {
      let user = getRandomUser();
      list.push(user);
    }
    setChatroomList(list);
  }, []);
  return (
    <Base>
      <div className="flex py-3 h-fullScreen">
        <div className="w-[325px] ml-auto bg-white h-full border border-gray-100 rounded-l-sm border-r-0">
          <InboxPanel chatroomList={chatroomList} />
        </div>
        <div className="flex max-w-full md:w-[620px] mr-auto">
          <div className="max-w-full md:w-[620px]  bg-white h-full border border-gray-100 rounded-r-sm  ">
            <ChatRoomMain chatroomList={chatroomList} />
          </div>
          <div className="min-w-[12px] hidden md:flex"></div>
        </div>
      </div>
    </Base>
  );
};
export default InboxMainPage;
