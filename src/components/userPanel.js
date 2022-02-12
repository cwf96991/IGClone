import Avatar from "./avatar";
import { useState, useEffect } from "react";
import { getRandomUser } from "../utils/random";
import { truncateName } from "../utils/function";
import { personalWebsite, footerList } from "../utils/constant";
import Modal from "./modal/modal";
const SuggestItem = ({ user }) => {
  const { avatar, isNFT, username, nickName, isNew, follower, extraFollower } =
    user;
  const [isFollow, setIsFollow] = useState(false);
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center w-[325px]">
        <Avatar size={"32"} isHighlight={false} img={avatar} isNFT={isNFT} />
        <div className="flex flex-row items-center justify-between grow">
          <div className="flex flex-col text-sm ml-4 grow">
            <div className="font-bold ">{username}</div>
            <div className="text-gray-300 text-xs font-bold">
              {isNew
                ? "New to CWFgram"
                : `Followed by ${truncateName(
                    follower
                  )} + ${extraFollower} more`}
            </div>
          </div>

          <div
            onClick={() => {
              if (!isFollow) {
                setIsFollow(true);
              }
            }}
            className={`btnText ${
              isFollow ? "text-black" : "!text-lightBlue"
            } !text-xs`}
          >
            {isFollow ? "Following" : "Follow"}
          </div>
        </div>
      </div>
    </div>
  );
};

const UserPanel = ({ user }) => {
  const { avatar, isNFT, username, nickName, isNew, follower, extraFollower } =
    user;
  const [suggestionList, setSuggestionList] = useState([]);
  useEffect(() => {
    let list = [];
    for (let index = 0; index < 5; index++) {
      user = getRandomUser();
      list.push(user);
    }

    setSuggestionList(list);
  }, []);

  return (
    <div className="mt-8  ml-6">
      <div className="flex items-center justify-between ">
        <div className="flex items-center w-[325px]">
          <Avatar size={"56"} isHighlight={false} img={avatar} isNFT={isNFT} />
          <div className="flex flex-row items-center justify-between grow">
            <div className="flex flex-col text-sm ml-4 grow">
              <div className="font-bold ">{truncateName(username)}</div>
              <div>{nickName}</div>
            </div>

            <div className="btnText !text-lightBlue !text-xs">Switch</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-[325px]">
        <div className="font-bold text-sm text-gray-300 my-4 ">
          Suggestions for you
        </div>
        <div className="font-bold text-sm">See All</div>
      </div>
      {suggestionList &&
        suggestionList.length != 0 &&
        suggestionList.map((user, index) => {
          return <SuggestItem user={user} key={index} />;
        })}
      <div className="flex flex-wrap w-[325px] text-gray-100 text-2xs font-bold mt-6 mb-4">
        {footerList.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                window.open(personalWebsite);
              }}
              className="cursor-pointer"
            >
              {`${item}`}
              {index != footerList.length - 1 && (
                <div className="inline cursor-default">．</div>
              )}
            </div>
          );
        })}
      </div>
      <div className="text-gray-100 text-2xs font-bold">
        © 2022 CWFGRAM FROM CWF
      </div>
      <Modal />
    </div>
  );
};
export default UserPanel;
